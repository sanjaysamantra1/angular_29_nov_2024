import { Component } from '@angular/core';
import * as data from './items.json';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
	 



@Component({
  selector: 'app-item-list',
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  items=(data as any).default;
  p:any;

  sortproductsASC(){
    this.items.sort((a:any,b:any)=>{return a.price-b.price});

  }
  sortproductsDSC(){
    this.items.sort((a:any,b:any)=>{return b.price-a.price});

  }
  
  searchProducts(n:any) { 
    console.log(n);
    if(n){
    this.items=this.items.filter((s:any)=>s.title.toLowerCase().includes(n.toLowerCase()));
      if(this.items.length===0){
        console.log("No items found");
      }
    }
    else{
      console.log("No items Found");
      this.items=this.items;
    }
   
 
    }


}
