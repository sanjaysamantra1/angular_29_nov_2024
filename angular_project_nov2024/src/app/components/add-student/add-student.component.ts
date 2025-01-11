import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
  outputs:['addStudent']
})
export class AddStudentComponent {

inputsid = 0;
inputsname = '';
inputgender='';

addStudent= new EventEmitter();

studentObject=Object.create(null);

sendNewDatatoParent(){
  this.studentObject.sid=this.inputsid;
  this.studentObject.sname=this.inputsname;
  this.studentObject.gender=this.inputgender;
  this.addStudent.emit(this.studentObject); 
  console.log("New Student :",this.studentObject);
}
}

