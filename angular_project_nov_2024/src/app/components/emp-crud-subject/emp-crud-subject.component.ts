import { Component, OnInit } from '@angular/core';
import { EmpSubjectService } from '../../services/emp-subject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-crud-subject',
  imports: [FormsModule],
  templateUrl: './emp-crud-subject.component.html',
  styleUrl: './emp-crud-subject.component.css'
})
export class EmpCrudSubjectComponent implements OnInit{
  emp: any[] = [];
  newEmp: any = {eid:'', name:'', sal:''};

  constructor(private empService: EmpSubjectService){}

  ngOnInit(): void{
    this.empService.fetchEmp();
    this.empService.getEmp().subscribe(emp => {
      this.emp = emp;
    });
  }

  addEmp(): void {
    if (this.newEmp.name && this.newEmp.email) {
      this.empService.addEmp(this.newEmp); // Add new employee
      this.newEmp = {eid:'', name:'', sal:'' }; // Reset form
    }
  }
  
  deleteEmp(userId: number): void {
    this.empService.deleteEmp(userId); 
  }
   
}


