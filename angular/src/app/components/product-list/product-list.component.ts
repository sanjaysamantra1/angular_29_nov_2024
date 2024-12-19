import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule,NgxPaginationModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products: Product[] = [];
  searchQuery: string = '';
  sortDirection: 'asc' | 'desc' | '' = '';
  
  constructor(private http: HttpClient, private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<Product[]>('./products.json').subscribe(data => {
      this.products = data;
      this.updateDisplayedProducts();
    });
  }

  updateDisplayedProducts(): void {
    let filteredProducts = this.products;

    if (this.searchQuery.trim()) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.sortDirection === 'asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortDirection === 'desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    this.paginationService.setData(filteredProducts);
  }

  changeSortDirection(direction: 'asc' | 'desc'): void {
    this.sortDirection = direction;
    this.updateDisplayedProducts();
  }

  updateSearchQuery(query: string): void {
    this.searchQuery = query;
    this.updateDisplayedProducts();
  }
}
