import { Component } from '@angular/core';
import * as data from './items.json';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-items-list',
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  items = (data as any).default; 
  p:any;


  sortProductsAsc(){
    this.items.sort((a:any,b:any)=>{return a.price- b.price});
  }
  sortProductsDesc(){
    this.items.sort((a:any,b:any)=>{return b.price- a.price});
  }

  searchProducts(searchterm:any){
    if(searchterm)
      {this.items=this.items.filter((item:any)=>item.title.toLowerCase().includes(searchterm.toLowerCase()));}
    else{
      console.log("No Search Term");
    }
    

  }
}
