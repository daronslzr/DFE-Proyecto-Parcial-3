import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product, dummyProductList } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor () { }
  getProductList(): Product[]{
    return dummyProductList;
  }
  //constructor(private http: HttpClient) { }
}
