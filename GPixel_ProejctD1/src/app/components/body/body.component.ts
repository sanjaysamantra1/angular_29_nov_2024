import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag :boolean=false;
  color : any;
  changeColor(): any{
    console.log(this.flag);
    this.flag=!this.flag;
    
    console.log(this.flag);
    if(this.flag){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
  }

  randomcolor():any{

  }
}
