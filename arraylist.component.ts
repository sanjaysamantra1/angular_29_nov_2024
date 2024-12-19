import { Component,OnInit  } from '@angular/core';
import * as data from './arrays.json';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-arraylist',
  imports: [NgxPaginationModule,CommonModule,FormsModule],
  templateUrl: './arraylist.component.html',
  styleUrl: './arraylist.component.css'
})

export class ArraylistComponent implements OnInit {

  arrays: any[] = [];
  filteredArrays : any[] = [];
  p : any;
  searchTerm : string = '';

  search() {
    this.filteredArrays = this.arrays.filter(array =>
      array.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  sortProducts(sortingOrder: string) {
    if (sortingOrder === "ascending") {
      this.filteredArrays = [...this.arrays].sort((a, b) => a.price - b.price); 
    } else if (sortingOrder === "descending") {
      this.filteredArrays = [...this.arrays].sort((a, b) => b.price - a.price); 
    }
  }
  ngOnInit() {
    this.arrays = (data as any).default; 
    this.filteredArrays = this.arrays; 
    console.log(this.arrays);
  }
}
    
  




