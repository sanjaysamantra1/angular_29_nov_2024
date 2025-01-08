import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  imports: [CommonModule],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css'
})

export class NgDoCheckComponent {

  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  currentText: string = 'Stop..!';

  constructor() {
    this.config = {
      "red": { nextColor: 'orange', text: 'Ready?' ,duration: 5000 },
      "orange": { nextColor: 'green', text: 'Go...' ,duration: 2000 },
      "green": { nextColor: 'red', text: 'Stop..!' ,duration: 4000 }
    };
    this.colorsArr = Object.keys(this.config);
  }

  ngDoCheck() {
    const { duration, nextColor, text } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
      this.currentText = text;
    }, duration)
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}
