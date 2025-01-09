import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-traffic-signal',
  templateUrl: './traffic-signal.component.html',
  styleUrls: ['./traffic-signal.component.css']
})
export class TrafficSignalComponent implements DoCheck {
  signalConfig: any;
  signalColors: string[];
  activeColor: string = 'red';
  signalTimer: any;

  constructor() {
    this.signalConfig = {
      "red": { nextColor: 'green', duration: 4000 },
      "green": { nextColor: 'yellow', duration: 3000 },
      "yellow": { nextColor: 'red', duration: 1000 }
    };
    this.signalColors = Object.keys(this.signalConfig);
  }
  ngDoCheck() {
    const { duration, nextColor } = this.signalConfig[this.activeColor];
    console.log(nextColor);
    this.signalTimer = setTimeout(() => { this.activeColor = nextColor; }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.signalTimer);
  }
}