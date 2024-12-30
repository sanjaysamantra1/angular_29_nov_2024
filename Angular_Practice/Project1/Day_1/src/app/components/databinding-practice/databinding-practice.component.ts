import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-practice',
  imports: [FormsModule],
  templateUrl: './databinding-practice.component.html',
  styleUrl: './databinding-practice.component.css'
})
export class DatabindingPracticeComponent {
myName:string="sachin";
my_img: string="data:image/jpeg;base64,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";
flag:boolean=true
myWidth='500px';
myHeight='100px';
result: any;
f1()
{
  console.log("f1 invoked");
}

addition(n1: any,n2: any)
{
  this.result= +n1 + +n2;
}

}
