import { Component } from '@angular/core';

@Component({
  selector: 'app-trafficlight',
  imports: [],
  templateUrl: './trafficlight.component.html',
  styleUrl: './trafficlight.component.css'
})
export class TrafficlightComponent {

  colors: any;
  colorsArray : string[] | undefined;
  selectedColor:string = "red";
  timer : any;

  constructor(){
    this.colors={
      "red":{nextColor: 'yellow', duration: 3000},
      "yellow":{nextColor:'green',duration:2000},
      "green":{nextColor:'red',duration:1000}
    };
    this.colorsArray = Object.keys(this.colors);  // The resulting array is: ['red', 'yellow', 'green']
  }


  // same like use effect to work on the timely changes
  ngDoCheck(){
    const{nextColor,duration} = this.colors[this.selectedColor]; // taking out the duration and nextcolor values
    this.timer = setTimeout(()=>{
      this.selectedColor= nextColor;
    },duration);
  }

  ngOnDestroy(){
    clearTimeout(this.timer);
  }

}
