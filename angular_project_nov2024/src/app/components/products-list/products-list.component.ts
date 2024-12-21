import { Component } from '@angular/core';
import * as data from './products.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faStar, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  imports: [NgxPaginationModule,
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products = (data as any).default;
p :any;
faMagnifyingGlass: any = faMagnifyingGlass;
searchedTerm:String = '';
filteredProducts: any=this.products;
product:any;


searchProducts(s:any){
  s=s.toLowerCase()
  this.filteredProducts=this.products.filter((product: any)=> {
    if(((product.category).includes(s))||((product.title).toLowerCase().includes(s))){
      return s;
    }})
} 



sortProducts(order: string): void {
  const sorted = [...this.products].sort((a, b) =>
    order === 'asc' ? a.price - b.price : b.price - a.price
  );
  this.products = sorted;}

   
    

    
    }
  
    
   
    
  


