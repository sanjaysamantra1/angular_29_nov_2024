import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  imports: [CommonModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css',
  inputs: ["chenna"],
  outputs: ["sendDataToParent"]
})
export class Child3Component {
  chenna: any;
  child3Data: any = 700000;
  myOwnMoney: any = 10;

  sendDataToParent = new EventEmitter();
  send() {
    this.sendDataToParent.emit(this.myOwnMoney);
  }
}
