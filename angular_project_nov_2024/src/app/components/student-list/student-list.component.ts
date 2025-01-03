import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  inputs:['students'],
  outputs:['deleteEvent']
})
export class StudentListComponent {

  students:any;
  stu:any;
  deleteEvent=new EventEmitter();
  
  
    sendDataToParent(stu:any) {
      this.deleteEvent.emit(stu); 
      console.log("Deleted Student :",stu);
    }

}
