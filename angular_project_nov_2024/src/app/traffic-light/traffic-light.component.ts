
import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {

  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor() {
    this.config = {
      "red": { nextColor: 'yellow', duration: 3000 },
      "yellow": { nextColor: 'green', duration: 1000 },
      "green": { nextColor: 'red', duration: 2000 }
      
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