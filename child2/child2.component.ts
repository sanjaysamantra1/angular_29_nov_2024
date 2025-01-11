import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs:['b', 'child2Ref']
})
export class Child2Component {
  b:any;
  child2Ref:any;
}