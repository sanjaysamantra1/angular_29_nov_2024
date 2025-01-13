import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  products: any;

  constructor(private httpClient: HttpClient, private loaderService: LoaderService) {}

  ngOnInit() {

    const prod_url = 'https://fakestoreapi.com/products';

    this.httpClient.get(prod_url).subscribe(response => {
      this.products = response;
    })
  }
}
