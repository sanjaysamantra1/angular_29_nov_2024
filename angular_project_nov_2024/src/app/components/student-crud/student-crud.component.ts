import { Component } from '@angular/core';
import { StudentListComponent } from "../student-list/student-list.component";
import { AddStudentComponent } from "../add-student/add-student.component";

@Component({
  selector: 'app-student-crud',
  imports: [StudentListComponent, AddStudentComponent],
  templateUrl: './student-crud.component.html',
  styleUrl: './student-crud.component.css'
})
export class StudentCrudComponent {


  students = [
    { sId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { sId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { sId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { sId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { sId: 105, name: 'deepak1', sal: 8000, gender: 'male' },
    { sId: 106, name: 'sanjay1', sal: 5000, gender: 'male' },
    { sId: 107, name: 'geeta1', sal: 8000, gender: 'female' },
    { sId: 108, name: 'sameer1', sal: 7000, gender: 'male' },
    { sId: 109, name: 'sita1', sal: 9000, gender: 'female' },
    { sId: 110, name: 'deepak1', sal: 8000, gender: 'male' },
    { sId: 111, name: 'sanjay2', sal: 5000, gender: 'male' },
    { sId: 112, name: 'geeta2', sal: 8000, gender: 'female' },
    { sId: 113, name: 'sameer2', sal: 7000, gender: 'male' },
    { sId: 114, name: 'sita2', sal: 9000, gender: 'female' },
    { sId: 115, name: 'deepak2', sal: 8000, gender: 'male' }
  ];

  
  deleteTheStudent(student: any) {
    let st=this.students.indexOf(student);
    console.log(st);
    this.students.splice(this.students.indexOf(student),1);

    }
    addTheStudent(student: any) {
      console.log(student);
      this.students.push(student);
      
      }

}
