import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategoryModel } from '../models/category.model';

@Injectable()
export class MainResourceService {

  constructor(private http: HttpClient) { }

  public saveMenuCategory(data: ICategoryModel) {
    return this.http.post('http://localhost:3002/category/create', data)
      .pipe(response => {
        return response;
      });
  }

  public getAllCategories() {
    return this.http.get('http://localhost:3002/category/getAllCategories');
  }
}
