import { Component, input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import * as products from './products.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faSearchPlus,faSortAmountAsc,faSortAmountDesc } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

   


@Component({
  selector: 'app-products',
  imports: [NgxPaginationModule,FontAwesomeModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = (products as any).default;
  
  p:any;
inputVal: string ='';
faSearchPlus:any=faSearchPlus;
faSortAmountAsc:any=faSortAmountAsc;
faSortAmountDesc:any=faSortAmountDesc;



filteredProducts: any[] = this.products;
  getInputValue() {
    if (this.inputVal == '') {
      this.products = this.filteredProducts
    } else {
      this.products = this.products.filter((product: any) => {
        return product.title.toLowerCase().includes(this.inputVal.toLowerCase());
      });
    }
  }
  ascending() {
    this.products = this.products.sort((product1: any, product2: any) => {
      return product1.price - product2.price;
    })
  }
  descending() {
    this.products = this.products.sort((product1: any, product2: any) => {
      return product2.price - product1.price;
    })
  }

}
