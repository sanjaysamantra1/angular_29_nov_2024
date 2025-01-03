import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
  outputs:['addstu']
})
export class AddStudentComponent {

inputID: number = 0;
inputName: string = "";
inputSalary: number = 0;
inputGender: string = "";

addstu=new EventEmitter(); 
stu=Object.create(null);
//stu:any;
    sendstudentToParent() {
      this.stu.sId=this.inputID;
      this.stu.name=this.inputName;
      this.stu.sal=this.inputSalary;
      this.stu.gender=this.inputGender;
      this.addstu.emit(this.stu); 
      console.log("added Student :",this.stu);
      this.inputID= 0;
this.inputName ="";
this.inputSalary=0;
this.inputGender= "";
    }

}
