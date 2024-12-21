import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import * as productsData from './products.json'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination-assignment',
  imports: [  NgxPaginationModule, CommonModule, FormsModule],
  templateUrl: './pagination-assignment-component.component.html',
  styleUrl: './pagination-assignment-component.component.css'
})
export class PaginationAssignmentComponent  implements OnInit{

  products: any[] = [];
  filteredProducts : any[] = [];
  p : any;
  searchTerm : string = '';

  search(){
    this.filteredProducts = this.products.filter(product => 
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  sortProducts(sortingOrder : string){
    if(sortingOrder === "ascending"){
      this.filteredProducts = this.products.sort((a,b) => a.price - b.price);
    }
    else{
      this.filteredProducts = this.products.sort((a,b) => b.price - a.price);
    }
    
  }

  ngOnInit() {
    this.products = (productsData as any).default;
    this.filteredProducts = [...this.products] // Assign the imported data
    console.log(this.products); 
  }

}