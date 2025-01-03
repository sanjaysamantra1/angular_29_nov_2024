import { Component } from '@angular/core';
import { SonComponent } from "../son/son.component";
import { Child3Component } from "../child3/child3.component";

@Component({
  selector: 'app-father',
  imports: [SonComponent, Child3Component],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  aParent: number = 100;
  bParent: number = 200;
  myChild3Data: any;

  received(value: any) {
    this.myChild3Data = value;
  }
}
