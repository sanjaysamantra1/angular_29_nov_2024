import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any;
  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((MyQueryParams: any) => {
    //   this.http.get(`http://fakestoreapi.com/products/${MyQueryParams?.id}`).subscribe(response => {
    //     this.product = response;
    //   })
    // });

    this.activatedRoute.data.subscribe((response:any) => {
      this.product = response.product;
    })
  }
}
