import { Component } from '@angular/core';
import { Child1Component } from "../child1/child1.component";
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  imports: [Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  a = 100;
  b = 200;
  parentCars: any;

  // Component Life cycle 

  constructor() {
    console.log("Parent constructor")
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }

  getDataFromChild(carsFromChild: any) {
    this.parentCars = carsFromChild;
  }



}