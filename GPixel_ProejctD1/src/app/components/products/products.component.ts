import { Component } from "@angular/core";
import * as apiData from "./products.json";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, RouterLink],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
})
export class ProductsComponent {
  products = (apiData as any).default;
  input: string = "";
  result: any;
  priceFlag: boolean = true;
  ratingFlag: boolean = true;
  alteredProducts = this.products;
  filteredProducts(input: string) {
    this.products.filter(this.products);
  }
  sortByPrice() {
    this.priceFlag = !this.priceFlag;
    if (this.priceFlag) {
      this.alteredProducts = this.products.sort(
        (a: any, b: any) => a.price - b.price
      );
    } else {
      this.alteredProducts = this.products.sort(
        (b: any, a: any) => a.price - b.price
      );
    }
  }
  sortByRating() {
    this.ratingFlag = !this.ratingFlag;
    if (this.ratingFlag) {
      this.alteredProducts = this.products.sort(
        (a: any, b: any) => a.rating.rate - b.rating.rate
      );
    } else {
      this.alteredProducts = this.products.sort(
        (b: any, a: any) => a.rating.rate - b.rating.rate
      );
    }
  }
  filterProducts() {
    this.alteredProducts = this.products.filter((product: any) => {
      return (
        product.title.toLowerCase().includes(this.input.toLowerCase()) ||
        product.category.toLowerCase().includes(this.input.toLowerCase())
      );
    });
  }
}
