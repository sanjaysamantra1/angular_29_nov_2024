import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crudops',
  imports: [FormsModule],
  templateUrl: './crudops.component.html',
  styleUrl: './crudops.component.css'
})
export class CrudopsComponent {
  employee = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  f1(id: any){
    console.log(id);
    this.employee = this.employee.filter((emp: any)=>{
      return emp.eId!=id ? emp : null;
    })
  }


  
}
