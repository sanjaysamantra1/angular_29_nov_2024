import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProductDetails(id: number) {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.get(url);
  }
}
