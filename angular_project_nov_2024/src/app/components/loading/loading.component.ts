import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  flag: boolean = false;
  show(){
    console.log("loading compinent show");
    this.flag = true;
  }
  hide(){
    console.log("loading compinent hide");
    this.flag = false;
  }

}
