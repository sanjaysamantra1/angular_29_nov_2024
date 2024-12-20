import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as productsData from './items.json'; 

@Component({
  selector: 'app-paginationassign',
  imports: [
    NgxPaginationModule, FormsModule, CommonModule
  ],
  templateUrl: './paginationassign.component.html',
  styleUrl: './paginationassign.component.css'
})
export class PaginationassignComponent implements OnInit {
  items: any[] = [];
  filtereditems : any[] = [];
  p : any;
  searchingTerm : string = '';

  search(){
    this.filtereditems = this.items.filter(product => 
      product.title.toLowerCase().includes(this.searchingTerm.toLowerCase())
    )
  }

  sortProducts(sortingOrder : string){
    if(sortingOrder === "ascending"){
      this.filtereditems = this.items.sort((a,b) => a.price - b.price);
    }
    else{
      this.filtereditems = this.items.sort((a,b) => b.price - a.price);
    }
    
  }

  ngOnInit() {
    this.items = (productsData as any).default;
    this.filtereditems = [...this.items]
    console.log(this.items); 
  }

}
