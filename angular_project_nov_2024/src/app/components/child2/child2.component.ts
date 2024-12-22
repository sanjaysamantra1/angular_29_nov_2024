import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['bChild', 'child1Name']
})
export class Child2Component {

  bChild: any;
  child1Name: any

}
