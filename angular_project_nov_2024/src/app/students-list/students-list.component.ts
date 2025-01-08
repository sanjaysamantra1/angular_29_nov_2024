import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-list',
  imports: [],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css',
  inputs:['students_arr'],
  outputs:['deleteEvent']
})
export class StudentsListComponent {
  students_arr: any[] = [];

  deleteEvent = new EventEmitter();

  delete_Student_entry(del_entry:any){
   this.deleteEvent.emit(del_entry);
  }
}
