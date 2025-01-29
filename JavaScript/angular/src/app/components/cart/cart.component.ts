import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private router: Router, private location: Location) {
  }
  doSomethingAndGoToHome() {
    console.log('Do Something.....');
    this.router.navigate(['/home']);
  }
  prev() {
    this.location.back();
  }
  next() {
    this.location.forward();
  }
  
}
