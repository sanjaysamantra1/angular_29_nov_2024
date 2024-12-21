import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-child2',
  imports: [
    Child1Component
  ],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['bChild', 'child1Name']
})
export class Child2Component {
  bChild: any;
  child1Name: any;
}
