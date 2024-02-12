import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../_model/category';

@Injectable({ providedIn: 'root' })
export abstract class ICategoryService {
  abstract getCategory(id: string): Observable<Category>;
}
