import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    const prod_url = 'https://fakestoreapi.com/products'
    this.httpClient.get(prod_url).subscribe(response => {
      this.products = response;
    })
  }
}
