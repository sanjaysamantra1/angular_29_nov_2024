import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent {
  inputColor: any;
  colorsArray: string[];
  selectedColor: string = 'red';
  timer: any;

  constructor(){
    this.inputColor = {
          "red": {nextColor: 'green', duration: 4000},
          "green": {nextColor: 'orange', duration: 3000},
          "orange": {nextColor: 'red', duration: 1000}
    };
    this.colorsArray = Object.keys(this.inputColor);
  }
  ngDoCheck(){
    const {duration, nextColor} = this.inputColor[this.selectedColor];
    this.timer = setTimeout(() => 
    {
      this.selectedColor = nextColor;
    }, duration)
  }

}
