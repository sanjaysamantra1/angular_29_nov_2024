import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import * as productsData from './items.json'; 
import { PaginationCardsComponent } from '../pagination-cards/pagination-cards.component';

@Component({
  selector: 'app-paginationassign',
  imports: [
    NgxPaginationModule,
    FormsModule,
    PaginationCardsComponent
],
  templateUrl: './paginationassign.component.html',
  styleUrl: './paginationassign.component.css'
})
export class PaginationassignComponent {
  items: any[] = (productsData as any).default; 
  filtereditems: any[] = [...this.items]; 
  p: any;
  searchingTerm: string = '';

  search() {
    this.filtereditems = this.items.filter((product) => {
      return product.title.toLowerCase().includes(this.searchingTerm.toLowerCase());
    });
  }    

  sortProducts(sortingOrder: string) {
    if (sortingOrder === 'ascending') {
      this.filtereditems = this.items.sort((a, b) => a.price - b.price);
    } else {
      this.filtereditems = this.items.sort((a, b) => b.price - a.price);
    }
  }
}
