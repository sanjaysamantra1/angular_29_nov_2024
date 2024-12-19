import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import Snackbar from 'awesome-snackbar'
// import { timeout } from 'rxjs';
import * as data from './products.json'
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  imports: [CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {


  products = (data as any).default;
  filteredProducts = [...this.products];
  p: any;
  searchText: string = ''; 

  openMyAlert(){
    Swal.fire('Good Job','You clicked this Button');
  }

  openMySnackBar(){
    new Snackbar('Hello, Rohith',
    {position: 'top-center', theme:'light',timeout:2000})
  }


  // Filter products based on search text
  filterProducts() {
    this.filteredProducts = this.products.filter((product: { title: string; }) => 
      product.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.p = 1; // Reset pagination to the first page whenever the search text changes
  }

  // Sort products by price
  sortByPrice(order: 'asc' | 'desc') {
    this.filteredProducts = [...this.filteredProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  // // Track by index to improve performance in *ngFor loop
  // trackByIndex(index: number, item: any) {
  //   return index;
  // }

}

