import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [
    RouterLink
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
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
