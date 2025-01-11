import { Component,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  inputs:['students'],
  outputs:['studentEvent']
})
export class StudentListComponent {
  students: any[] = [];
  
  studentEvent = new EventEmitter();

  sendDatatoParent(student:any){
   console.log(student);
   this.studentEvent.emit(student);
  }
}
