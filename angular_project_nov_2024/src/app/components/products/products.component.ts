import { Component } from '@angular/core';
import * as products from './products.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faPlane, faArrowDown19, faArrowUp91, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../product-card/product-card.component";
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../services/loading.service';


@Component({
  selector: 'app-products',
  imports: [NgxPaginationModule, FormsModule, FontAwesomeModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // productList = (products as any).default;
  productList: any = '';
  p: any;
  faStar: any = faStar;
  faPlane: any = faPlane;
  faArrowDown19: any = faArrowDown19;
  faArrowUp91: any = faArrowUp91;
  faSearch: any = faSearch;
  inputValue: string = '';
  isLoading: boolean = false;

  copyOfProducts: any[] = this.productList;

  constructor(private httpClient: HttpClient, private loadingService: LoadingService) { }

  ngOnInit() {
    const product_url = "https://fakestoreapi.com/products";
    this.isLoading = this.loadingService.show();

    this.httpClient.get(product_url).subscribe(response => {
      this.productList = response;
        this.isLoading = this.loadingService.hide();
    });

  }

  ngDoCheck() {
    // if(this.productList == '') {
    //   this.isLoading = this.loadingService.show();
    //   // setTimeout(() => {
    //   //   console.log("Hello");
    //   // }, 2000)
    // } else {
    //   this.isLoading = this.loadingService.hide();
    // }
  }

  getInputValue() {
    console.log(this.inputValue);

    if (this.inputValue == '') {
      this.productList = this.copyOfProducts
    } else {
      this.productList = this.productList.filter((product: any) => {
        return product.title.toLowerCase().includes(this.inputValue.toLowerCase());
      });
    }
  }

  ascending() {
    console.log("ASC");
    this.productList = this.productList.sort((product1: any, product2: any) => {
      return product1.price - product2.price;
    })
  }

  descending() {
    console.log("DESC");
    this.productList = this.productList.sort((product1: any, product2: any) => {
      return product2.price - product1.price;
    })
  }

}
