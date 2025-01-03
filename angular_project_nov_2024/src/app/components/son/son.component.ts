import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-son',
  imports: [CommonModule],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css',
  inputs: ["aParentToSon", 'myBrothersMoney']
})
export class SonComponent {
  aParentToSon: any;
  myBrothersMoney: any;

}
