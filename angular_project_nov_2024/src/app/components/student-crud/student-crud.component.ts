import { Component } from '@angular/core';
import { StudentsListComponent } from '../../students-list/students-list.component';
import { AddStudentsComponent } from '../../add-students/add-students.component';

@Component({
  selector: 'app-student-crud',
  imports: [StudentsListComponent,AddStudentsComponent],
  templateUrl: './student-crud.component.html',
  styleUrl: './student-crud.component.css'
})
export class StudentCrudComponent {
  students_arr=[
    {sId: 100 ,Name:'Sankeerth',gender:'Male',course:'CSE'},
    {sId: 502 ,Name:'Deeraj',gender:'Male',course:'ECE'},
    {sId: 503 ,Name:'Sathwik',gender:'Male',course:'EEE'},
    {sId: 504 ,Name:'Chenna',gender:'Male',course:'CSE'},
    {sId: 505 ,Name:'Baalu',gender:'Male',course:'EIE'}
  ];

  
  delete_Student(del_student:any){
    this.students_arr.splice(this.students_arr.indexOf(del_student),1);

  }
  add_Student(new_student:any){
    this.students_arr.push(new_student);

  }


}
