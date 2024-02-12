import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, CategoryItem } from './_model/category';
import { Rank, RankCard } from './_model/rank-card';
import { RankCardList, RankCardRule, User } from './_model/user';
import { ICategoryService } from './_services/category.service';
import { IUserService } from './_services/user.service';

export enum SessionVariables { 
  ActiveUser = 'ActiveUser',
  ActiveCategory = 'ActiveCategory'
}

/********************** This is ultimately where all the data magic happens ************************/

//I tried using inheritance, by creating a base class to give the User services a connection to the Session store,
//but the engineering got really messy, so I just made one single handler that does all the web requests.
//I couldn't feel at peace giving the implementers control over the Session store, in fear the logic would be duplicated,
//or worse, the implementers could behave with it differently. I wanted a base class that takes care of those boilerplate tasks.
//Any dependency injection is reflected in UserSessionHandler's constructor. EVERYTHING goes through this UserSessionHandler.
//That could be bad, but who knows!

//I also realize there's no point returning Observable<any> to invokers.
//All those invokers naturally subscribe to onSessionLoaded in their constructors

//TODO: needs a refresh/session token?
//TODO: might need a global logger that broadcasts error messages
@Injectable({ providedIn: 'root'})
export class UserSessionHandler {
  constructor(private userDataService: IUserService, private categoryDataService: ICategoryService) {}

  //UserProfile should be the only one listening
  private sessionLoadedEvent = new Subject<User>();
  public onSessionLoaded = this.sessionLoadedEvent.asObservable();
  private triggerSessionLoaded(event: User) { this.sessionLoadedEvent.next(event); }

  /************ Always invoke this in OnInit of the main user container! *************/
  initializeSessionUser(id: string, changedActiveListId?: string) {
    //make a clean data pull, don't want any concurrency issues
    sessionStorage.clear();

    //get the user
    this.userDataService.getUser(id).subscribe(userResult => {
      if(changedActiveListId) { //if user wants to switch lists, send update to database then login again (HAS NOT BEEN TESTED)
        userResult.config.lastActiveListId = changedActiveListId;
        this.userDataService.updateUser(userResult).subscribe(() => this.initializeSessionUser(id));
      }
      else { //this is the general case
        sessionStorage.setItem(SessionVariables.ActiveUser, JSON.stringify(userResult));

        //get the category associated with user.config.lastActiveListId
        this.categoryDataService.getCategory(this.activeList.categoryId).subscribe(categoryResult => {
          console.log('getCategory after mockLoginNewUser');
          console.log(categoryResult);
          sessionStorage.setItem(SessionVariables.ActiveCategory, JSON.stringify(categoryResult));
          this.triggerSessionLoaded(userResult);
        });
      }
    });
  }

  //wrappers for sessionStorage
  get sessionUser()     : User     { return JSON.parse(sessionStorage.getItem(SessionVariables.ActiveUser)); }
  get sessionCategory() : Category { return JSON.parse(sessionStorage.getItem(SessionVariables.ActiveCategory)); }
  get activeList(): RankCardList { return this.sessionUser.rankCardLists.find(l => l.listId == this.sessionUser.config.lastActiveListId); }
  
  //these are essentially short-hand queries that get annoying to read
  getCategoryItem = (categoryItemId: number): CategoryItem  => this.sessionCategory.items.find(x => x.itemId == categoryItemId);
  getRule         = (ruleCode: string): RankCardRule        => this.activeList.rules.find(r => r.code == ruleCode);
  getCard         = (categoryItemId: number): RankCard      => this.activeList.rankCards.find(c => c.categoryItemId == categoryItemId);
  getCardRank     = (categoryItemId: number, ruleCode: string): Rank => this.getCard(categoryItemId).ranks.find(r => r.code == ruleCode);

  refreshCurrentSessionUser = () => this.initializeSessionUser(this.sessionUser.userId);
  updateThenGetUser(card: RankCard): User { 
    var user = this.sessionUser;
    user.rankCardLists.find(l => l.listId == this.activeList.listId).rankCards.push(card);
    return user;
  }

  //caller is responsible for tracking new category item details
  //if there is no new categoryItem, we assume there's already a match
  addRankCardForSessionUser(card: RankCard, categoryItem?: CategoryItem) {
    //send the RankCard to the database, then refresh the user session data
    const newUserData = this.updateThenGetUser(card);
    console.log('PREupdateResult:'); console.log(card);

    if(categoryItem)
      this.userDataService.addLinkedRankCard(card, categoryItem, this.sessionUser, this.sessionCategory).subscribe(updateResult => {
        console.log('updateResult:'); console.log(updateResult);
        this.refreshCurrentSessionUser();
      });
    else
      this.userDataService.updateUser(newUserData).subscribe(updateResult => {
        console.log('updateResult:'); console.log(updateResult);
        this.refreshCurrentSessionUser();
      });
  }

}