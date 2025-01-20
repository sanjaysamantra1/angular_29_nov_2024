import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-lights',
  imports: [],
  templateUrl: './traffic-lights.component.html',
  styleUrl: './traffic-lights.component.css'
})
export class TrafficLightsComponent {
  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor() {
    this.config = {
      "red": { nextColor: 'yellow', duration: 4000 },
      "yellow": { nextColor: 'green', duration: 1000 },
      "green": { nextColor: 'yellow', duration: 3000 }
      
    };
    this.colorsArr = Object.keys(this.config);
  }
  ngDoCheck() {
    const { duration, nextColor } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
    }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}
