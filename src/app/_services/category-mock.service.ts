import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../_model/category';
import { ICategoryService } from './category.service';

@Injectable({ providedIn: 'root' })
export class CategoryMockService implements ICategoryService {
  getCategory(id: string): Observable<Category> {
    return of(CategoryMockService.mockCategory);
  }
  
  //it is assumed that the User.RankCardList[activeList].categoryId will always point to only one "Category" Mongo document
  //had dumb "this" issues, now it's static
  static mockCategory: Category = {
    "categoryId": "#videogames",
    "items": [
      {
        "itemId": 0,
        "title": "Shadows of the Colossus",
        "thumb": "https://assets1.ignimgs.com/2017/11/01/shadow-of-the-colossus-button-01-1509569281609.jpg",
        "metadata": {
          "releaseDate": "DATEHERE",
          "platforms": ["PS2", "PS4"]
        }
      }, 
      {
        "itemId": 1,
        "title": "Child of Light",
        "thumb": "/assets/childoflight.png",
        "metadata": {
          "releaseDate": "DATEHERE",
          "platforms": ["PC", "PS4", "Switch"]
        }
      }, 
      {
        "itemId": 2,
        "title": "Golf Story",
        "thumb": "/assets/golfstory.jpg",
        "metadata": {}
      }, 
      {
        "itemId": 3,
        "title": "Horizon Zero Dawn",
        "thumb": "/assets/hzd.jpg",
        "metadata": {}
      }, 
      {
        "itemId": 4,
        "title": "STAR WARS Jedi: Fallen Order",
        "thumb": "/assets/jedif.jpg",
        "metadata": {}
      }, 
      {
        "itemId": 5,
        "title": "Outer Wilds",
        "thumb": "/assets/outerwilds.jpg",
        "metadata": {}
      }, 
      {
        "itemId": 6,
        "title": "Xenoblade Chronicles",
        "thumb": "/assets/xenoblade1.png",
        "metadata": {}
      }, 
      {
        "itemId": 7,
        "title": "Final Fantasy 7 Remake",
        "thumb": "/assets/ff7r.jpg",
        "metadata": {}
      }
    ]
  };

}
