import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../_model/category';
import { ICategoryService } from './category.service';

@Injectable({ providedIn: 'root' })
export class CategoryMongoService implements ICategoryService {
  constructor(private http: HttpClient) { }
  GET_CATEGORY_URL = '/category/get';
  
  getCategory(id: string): Observable<Category> {
    let query = { categoryId: id };
    return this.http.post<Category>(this.GET_CATEGORY_URL, query);
  }
}
