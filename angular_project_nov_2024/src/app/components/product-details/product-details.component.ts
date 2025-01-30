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
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }
  
  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((MyQueryParams: any) => {
    //   // console.log(MyQueryParams);
    //   // this.product = MyQueryParams;
    //   this.http.get(`https://fakestoreapi.com/products/${MyQueryParams?.id}`).subscribe(response => {
    //     this.product = response;
    //   })
    // });

    this.activatedRoute.data.subscribe((productFromResolver: any) => {
      this.product = productFromResolver?.product;
    })

  }

}
