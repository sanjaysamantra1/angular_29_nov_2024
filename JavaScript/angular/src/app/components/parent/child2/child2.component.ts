import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs:['b','name1','child1Ref']
})
export class Child2Component {

  b:any;
  name1:any;


  child1Ref: any;
}
