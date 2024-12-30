import { Component } from '@angular/core';
import * as data from './products.json';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faStar, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,
    ProductCardComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
productsArr = (data as any).default;
p :any;
faStar: any = faStar;
faMagnifyingGlass: any = faMagnifyingGlass;
faArrowUp: any = faArrowUp;
faArrowDown : any= faArrowDown;
searchedItem:String = '';
searchedProducts: any=this.productsArr;
product:any;


searchItem(s:any){
  s=s.toLowerCase()
  this.searchedProducts=this.productsArr.filter((eachProduct: any)=> {
    if(((eachProduct.category).includes(s))||((eachProduct.title).toLowerCase().includes(s))){
      return s;
    }})
} 

selectedState: String='';
sortFun($event : any){
  switch(this.selectedState){
    case 'LP':
      this.searchedProducts = this.productsArr.sort((a:any,b:any)=> a.price-b.price);
      break;
    case 'HP':
      this.searchedProducts = this.productsArr.sort((a:any,b:any)=> b.price-a.price);
      break;
    case 'LR':
      this.searchedProducts = this.productsArr.sort((a:any,b:any)=> a.rating.rate-b.rating.rate);
      break;
    case 'HR':
      this.searchedProducts = this.productsArr.sort((a:any,b:any)=> b.rating.rate-a.rating.rate);
      break;
    default:
      this.searchItem(this.selectedState);
      break;
  }
}
}
