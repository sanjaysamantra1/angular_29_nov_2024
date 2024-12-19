import { Component } from '@angular/core';
import * as data from './products.json';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-products-assignment',
    imports: [FormsModule, NgxPaginationModule],
    templateUrl: './products-assignment.component.html',
    styleUrl: './products-assignment.component.css',
})
export class ProductsAssignmentComponent {
    products = (data as any).default;

    productSearchResult: any = this.products;
    searchProduct(searchText: string) {
        console.log('search started');
        if (searchText.length == 0) {
            this.productSearchResult = this.products;
            return;
        }

        this.productSearchResult = this.products.filter((product: any) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(this.productSearchResult);
    }

    ascendingOrder() {
        this.productSearchResult = this.productSearchResult.sort(
            (productA: any, productB: any) => productA.price - productB.price
        );
    }
    descendingOrder() {
        this.productSearchResult = this.productSearchResult.sort(
            (productA: any, productB: any) => productB.price - productA.price
        );
    }
    page: any;
}
