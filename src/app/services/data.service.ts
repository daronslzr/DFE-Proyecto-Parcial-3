import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product, dummyProductList } from '../models/producto';
import { Observable } from 'rxjs';

const API_PATH = 'https://6567e0a39927836bd973e30b.mockapi.io/api/';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*
  constructor () { }
  getProductList(): Product[]{
    return dummyProductList;
  }*/
  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]>{
    const path = API_PATH + 'products';

    return this.http.get<Product[]>(path);
  }
}
