import { Component, Input, OnInit } from '@angular/core';
import { RankCardList, User } from '../_model/user';
import { UserSessionHandler } from '../user-session-handler';
import { HomeSortOptions } from '../user-profile/user-profile.component';

@Component({ selector: 'home', templateUrl: './home.component.html' })
export class HomeComponent implements OnInit {
  constructor(private userSessionHandler: UserSessionHandler) {
    this.sessionHasLoaded = false;
    console.log("LOADING USER: " + this.initRequest.userId);
    this.userSessionHandler.onSessionLoaded.subscribe(result => {
      console.log("onSessionLoaded result:");
      console.log(result);
      this.activeUser = result;
      this.activeRankCardList = this.userSessionHandler.activeList;
      this.sessionHasLoaded = true;
    });
  }

  @Input() set activeSortKey(value: string) { this.activeSort = HomeSortOptions[value]; }

  sessionHasLoaded: boolean;
  activeUser: User;
  activeRankCardList: RankCardList;
  activeSort: string = 'title';
  
  // initRequest = { userId: 'nkovitz' };
  initRequest = { userId: 'mocknkovitz' };
  // initRequest = { userId: 'localmocknkovitz' };

  ngOnInit() { this.userSessionHandler.initializeSessionUser(this.initRequest.userId); }
}
