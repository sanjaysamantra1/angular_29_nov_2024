import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  displayedProducts: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 0;

  ngOnInit() {
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      this.products = await response.json();
      this.filteredProducts = [...this.products];
      this.updatePagination();
      this.paginate();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  search() {
    const term = this.searchTerm.toLowerCase().trim();
    
    if (term === '') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(term)
      );
    }
    
    this.currentPage = 1;
    this.updatePagination();
    this.paginate();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  paginate() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedProducts = this.filteredProducts.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  sortProducts(order: string) {
    if (order === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
    this.paginate();
  }
}