import { Component } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-student-crud',
  imports: [StudentListComponent,
    AddStudentComponent
  ],
  templateUrl: './student-crud.component.html',
  styleUrl: './student-crud.component.css'
})
export class StudentCrudComponent {
  students=[
    {sid: 501 ,sname:'Bubu',gender:'Male'},
    {sid: 502 ,sname:'Sree',gender:'Female'},
    {sid: 503 ,sname:'Chitti',gender:'Female'},
    {sid: 504 ,sname:'Bannu',gender:'Male'},
    {sid: 505 ,sname:'Minni',gender:'Female'}
  ];

  
  getDataFromChild(student:any){
    let stdel=this.students.indexOf(student);
    console.log(stdel);
    this.students.splice(this.students.indexOf(student),1);
    
  }
  addNewStudent(st:any){
    console.log(st);
    this.students.push(st);
    
  }

}
