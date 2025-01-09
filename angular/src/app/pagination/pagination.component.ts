import { Component } from '@angular/core';
import * as productsdata from './product.json';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProductslistComponent } from '../productslist/productslist.component';

@Component({
  selector: 'app-pagination',
  imports: [FormsModule, NgxPaginationModule, ProductslistComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {


  // listofproducts : any[];
  // searchedproducts: any[];
  searchterm : string = '';
  page :any;
  // constructor(){ 
    
  // }

  listofproducts : any[] =(productsdata as any).default;
  searchedproducts : any[] =[...this.listofproducts];
  // console.log(searchedproducts);


  search() {
    this.searchedproducts = this.listofproducts.filter(product => product.title.toLowerCase().includes(this.searchterm.toLowerCase()));
  }

  

  sortingProducts(sortingOrder : any){
    if(sortingOrder === "ascending"){
      this.searchedproducts = this.listofproducts.sort((a,b) => a.price - b.price);
    }
    else{
      this.searchedproducts = this.listofproducts.sort((a,b) => b.price - a.price);
    }
  }
  
}