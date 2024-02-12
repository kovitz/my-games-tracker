import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, CategoryItem } from '../_model/category';
import { RankCard } from '../_model/rank-card';
import { RankCardList, User } from '../_model/user';

@Injectable({ providedIn: 'root'})
export abstract class IUserService {
  abstract getUser(id: string): Observable<User>;
  //used when *only* updating the user
  abstract updateUser(user: User): Observable<any>;
  //specifically used when there is no categoryItem in the database yet
  abstract addLinkedRankCard(card: RankCard, categoryItem: CategoryItem, activeUser?: User, activeCategory?: Category): Observable<any>;
}

// forwardResult<T>(obs: Observable<T>, predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): Observable<T>{
//   return 
// }