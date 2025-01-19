import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {

  myTimer;
  constructor() {
    this.myTimer = setInterval(() => {
      console.log("I am demo2 component");
    }, 1000)
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    clearInterval(this.myTimer);
  }

}
