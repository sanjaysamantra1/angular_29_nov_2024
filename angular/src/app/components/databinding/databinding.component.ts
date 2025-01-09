import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  myname: string = "sivakrishna";

  img : string ="https://wallpaperaccess.com/full/2493379.jpg";

  flag : boolean = false;

  vtoc(){
console.log("iam printing.................");
  }

  addition(n1:any , n2:any){
  console.log(`addition of  ${n1} and ${n2} is ${+n1 + +n2}`)  

  }

selectedState : string='';


}
