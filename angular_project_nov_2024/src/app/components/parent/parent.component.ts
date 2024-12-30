import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  imports: [Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  parentA:any=100;
  parentB:any=200;

  bChild=300;

  parentCars: any;

  getDataFromChild(carsFromChild: any) {
    this.parentCars = carsFromChild;
  }
}
