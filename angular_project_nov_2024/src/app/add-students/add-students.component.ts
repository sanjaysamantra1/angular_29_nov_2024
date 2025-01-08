import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  imports: [FormsModule],
  templateUrl: './add-students.component.html',
  styleUrl: './add-students.component.css',
  outputs:['addStudent']
})
export class AddStudentsComponent {
input_Id = 0;
input_Name = '';
input_Gender='';
input_Course='';

addStudent= new EventEmitter();

newStudentObject=Object.create(null);

add_Student(){
  this.newStudentObject.sId=this.input_Id;
  this.newStudentObject.Name=this.input_Name;
  this.newStudentObject.gender=this.input_Gender;
  this.newStudentObject.course=this.input_Course;
  this.addStudent.emit(this.newStudentObject); 
  
}

}
