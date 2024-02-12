import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSessionHandler } from '../user-session-handler';
import { Category, CategoryItem } from '../_model/category';
import { RankCard } from '../_model/rank-card';
import { User } from '../_model/user';
import { IUserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserMongoService implements IUserService {
  constructor(private http: HttpClient) { }
  GET_USER_URL = '/user/get';
  UPDATE_USER_URL = '/user/update';
  ADD_LINKED_RANKCARD_URL = '/user/addLinkedRankCard';

  getUser(id: string): Observable<User> {
    let query = { userId: id };
	return this.http.get<User>(this.GET_USER_URL);
    // return this.http.post<User>(this.GET_USER_URL, query);
  }

  updateUser(user: User): Observable<any> {
    let query = { user: user };
    return this.http.post(this.UPDATE_USER_URL, query);
  }

  addLinkedRankCard(card: RankCard, categoryItem: CategoryItem, sessionUser: User, sessionCategory: Category): Observable<any> {
    let query = {
      categoryId: sessionCategory.categoryId,
      userId: sessionUser.userId,
      rankCard: card, 
      categoryItem: categoryItem 
    };
    return this.http.post(this.ADD_LINKED_RANKCARD_URL, query);
  }
}
