import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryItem } from '../_model/category';
import { RankCard } from '../_model/rank-card';
import { User } from '../_model/user';
import { CategoryMockService } from './category-mock.service';
import { IUserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserMockService implements IUserService {
  getUser(id: string): Observable<User> {
    return of(UserMockService.mockUserJSON);
  }

  updateUser(user: User): Observable<any> {
    UserMockService.mockUserJSON = Object.assign({}, user);
    return of();
  }

  addLinkedRankCard(card: RankCard, categoryItem: CategoryItem): Observable<any> {
    //categoryItem isnt getting added for some reason
    CategoryMockService.mockCategory.items.push(categoryItem);
    UserMockService.mockUserJSON.rankCardLists
      .find(x => x.listId == UserMockService.mockUserJSON.config.lastActiveListId)
      .rankCards.push(card);
    return of();
  }
  
  //had dumb "this" issues, now it's static
  static mockUserJSON: User = {
    "userId": "localmocknkovitz",
    "config": {
      "facebookLink": "NONE",
      "lastActiveListId": "~niksgames"
    },
    "rankCardLists": [
      {
        "listId": "~niksgames",
        "title": "Niks Top-Tier Games",
        "categoryId": "#videogames",
        "rules": [
          { "code": "A", "ruleName": "Art Style", "weight": 10 },
          { "code": "B", "ruleName": "Game Mechanics", "weight": 10 },
          { "code": "C", "ruleName": "Cool & Nostalgia", "weight": 10 },
          { "code": "E", "ruleName": "Engagement", "weight": 10 },
          { "code": "G", "ruleName": "Game Design", "weight": 10 },
          { "code": "L", "ruleName": "Level Design", "weight": 10 },
          { "code": "M", "ruleName": "Music", "weight": 10 },
          { "code": "P", "ruleName": "Progression", "weight": 10 },
          { "code": "R", "ruleName": "Metacritic", "weight": 10 },
          { "code": "S", "ruleName": "Satisfaction", "weight": 7 },
          { "code": "X", "ruleName": "Bonuses", "weight": 3 }
        ],
        "rankCards": [
          {
            "categoryItemId": 0,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 1 },
              { "code": "B", "score": 2 },
              { "code": "C", "score": 3 },
              { "code": "E", "score": 4 },
              { "code": "G", "score": 5 },
              { "code": "L", "score": 10 },
              { "code": "M", "score": 7 },
              { "code": "P", "score": 8 },
              { "code": "R", "score": 8 },
              { "code": "S", "score": 8 },
              { "code": "X", "score": 1 }
            ]
          },
          {
            "categoryItemId": 1,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }, { "increment": -1, "comment": "NEGATIVEEXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 3 },
              { "code": "B", "score": 3 },
              { "code": "C", "score": 4 },
              { "code": "E", "score": 4 },
              { "code": "G", "score": 5 },
              { "code": "L", "score": 5 },
              { "code": "M", "score": 5 },
              { "code": "P", "score": 5 },
              { "code": "R", "score": 5 },
              { "code": "S", "score": 5 },
              { "code": "X", "score": 1 }
            ]
          },
          {
            "categoryItemId": 2,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 8 },
              { "code": "B", "score": 8 },
              { "code": "C", "score": 8 },
              { "code": "E", "score": 8 },
              { "code": "G", "score": 8 },
              { "code": "L", "score": 8 },
              { "code": "M", "score": 8 },
              { "code": "P", "score": 8 },
              { "code": "R", "score": 8 },
              { "code": "S", "score": 8 },
              { "code": "X", "score": 1 }
            ]
          },
          {
            "categoryItemId": 3,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 8 },
              { "code": "B", "score": 8 },
              { "code": "C", "score": 8 },
              { "code": "E", "score": 8 },
              { "code": "G", "score": 8 },
              { "code": "L", "score": 8 },
              { "code": "M", "score": 8 },
              { "code": "P", "score": 8 },
              { "code": "R", "score": 8 },
              { "code": "S", "score": 8 },
              { "code": "X", "score": 1 }
            ]
          },
          {
            "categoryItemId": 4,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 8 },
              { "code": "B", "score": 8 },
              { "code": "C", "score": 8 },
              { "code": "E", "score": 8 },
              { "code": "G", "score": 8 },
              { "code": "L", "score": 8 },
              { "code": "M", "score": 8 },
              { "code": "P", "score": 8 },
              { "code": "R", "score": 8 },
              { "code": "S", "score": 8 },
              { "code": "X", "score": 1 }
            ]
          },
          {
            "categoryItemId": 5,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 8 },
              { "code": "B", "score": 8 },
              { "code": "C", "score": 8 },
              { "code": "E", "score": 8 },
              { "code": "G", "score": 8 },
              { "code": "L", "score": 8 },
              { "code": "M", "score": 8 },
              { "code": "P", "score": 8 },
              { "code": "R", "score": 8 },
              { "code": "S", "score": 8 },
              { "code": "X", "score": 1 }
            ]
          },
          {
            "categoryItemId": 6,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 8 },
              { "code": "B", "score": 8 },
              { "code": "C", "score": 8 },
              { "code": "E", "score": 8 },
              { "code": "G", "score": 8 },
              { "code": "L", "score": 8 },
              { "code": "M", "score": 8 },
              { "code": "P", "score": 8 },
              { "code": "R", "score": 8 },
              { "code": "S", "score": 8 },
              { "code": "X", "score": 1 }
            ]
          },
          {
            "categoryItemId": 7,
            "metadata": {},
            "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
            "ranks": [
              { "code": "A", "score": 8 },
              { "code": "B", "score": 8 },
              { "code": "C", "score": 8 },
              { "code": "E", "score": 8 },
              { "code": "G", "score": 8 },
              { "code": "L", "score": 8 },
              { "code": "M", "score": 8 },
              { "code": "P", "score": 8 },
              { "code": "R", "score": 8 },
              { "code": "S", "score": 8 },
              { "code": "X", "score": 1 }
            ]
          }
        ]
      }
    ]
  };

}
