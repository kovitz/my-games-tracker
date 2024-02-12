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
        "title": "FinHealthSDK",
        "thumb": "https://loremflickr.com/g/320/240/computer",
        "metadata": {
          "releaseDate": "DATEHERE",
          "platforms": ["PS2", "PS4"]
        }
      }, 
      {
        "itemId": 1,
        "title": "Interactive Gas Station TV",
        "thumb": "https://loremflickr.com/g/320/240/laptop",
        "metadata": {
          "releaseDate": "DATEHERE",
          "platforms": ["PC", "PS4", "Switch"]
        }
      }, 
      {
        "itemId": 2,
        "title": "Hands-free Premium Account Services",
        "thumb": "https://loremflickr.com/g/320/240/smartphone",
        "metadata": {}
      }, 
      {
        "itemId": 3,
        "title": "Calm Tech Integrated Into Main Website",
        "thumb": "https://loremflickr.com/g/320/240/finance",
        "metadata": {}
      }, 
      {
        "itemId": 4,
        "title": "AR Supplemental Info Layer",
        "thumb": "https://loremflickr.com/g/320/240/tech",
        "metadata": {}
      }, 
      {
        "itemId": 5,
        "title": "Metaverse Sensory Immersion",
        "thumb": "https://loremflickr.com/g/320/240/metaverse",
        "metadata": {}
      }, 
      {
        "itemId": 6,
        "title": "Smartphone Badges",
        "thumb": "https://loremflickr.com/g/320/240/badge",
        "metadata": {}
      }, 
      {
        "itemId": 7,
        "title": "Personalized News Feed",
        "thumb": "https://loremflickr.com/g/320/240/newsfeed",
        "metadata": {}
      }
    ]
  };

}
