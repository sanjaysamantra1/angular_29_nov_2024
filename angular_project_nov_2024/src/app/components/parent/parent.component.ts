import { Component, ViewChildren } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child1Component, Child2Component, CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  parentA:any=100;
  parentB:any=200;

  bChild=300;

  parentCars: any;

  @ViewChildren('inputBox') allInputBoxes: any;

  getDataFromChild(carsFromChild: any) {
    this.parentCars = carsFromChild;
  }

  f1() {
    console.log('I am F1.....')
  }
  // HttpClient service is being injected to the component
  constructor(private httpClient: HttpClient) { // Dependency Injection
    this.parentA = 100; // initialize class variables
    console.log("Parent constructor")
    console.log(this.allInputBoxes)
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.allInputBoxes)
    this.allInputBoxes['_results'].forEach((ele:any) => {
       console.log(ele);
       ele.nativeElement.style.backgroundColor='red';
    });
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestroy');
  // }

}
