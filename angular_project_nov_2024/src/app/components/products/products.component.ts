import { Component } from '@angular/core';
import * as products from './products.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faPlane, faArrowDown19, faArrowUp91, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  imports: [NgxPaginationModule, FormsModule, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productList = (products as any).default;
  p: any;
  faStar: any = faStar;
  faPlane: any = faPlane;
  faArrowDown19: any = faArrowDown19;
  faArrowUp91: any = faArrowUp91;
  faSearch: any = faSearch;
  inputValue: string = '';

  copyOfProducts: any[] = this.productList;

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
