
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employeecrud',
  imports: [FormsModule],
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.css'
})
export class EmployeecrudComponent {
openMyAlert()
{
  Swal.fire("This is crud file")
}


employees = [
  { id: 1, name: 'Dheeraj', position: 'Software Developer', salary: 75000 },
  { id: 2, name: 'Sankeerth', position: 'UI/UX Designer', salary: 65000 },
  { id: 3, name: 'Dhanush', position: 'Project Manager', salary: 90000 },
  { id: 4, name: 'Vamsi', position: 'QA Engineer', salary: 60000 },
  { id: 5, name: 'Chenna', position: 'DevOps Engineer', salary: 85000 },
 
];

selectedEmployee:any=String;

newEmployee = {
  name: '',
  position: '',
  salary:0
};


addEmployee(): void {
  if (this.newEmployee.name && this.newEmployee.position && this.newEmployee.salary) {
    const newId = this.employees.length + 1; 
    const employee = { id: newId, ...this.newEmployee };
    this.employees.push(employee);


    this.newEmployee = { name: '', position: '', salary: 0 };
  } else {
    alert('All fields are required.');
  }
}


viewEmployee(employee: any): void {
  this.selectedEmployee = { ...employee };
}

deleteEmployee(id: number): void {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you really want to delete this employee?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'aquablue',
    cancelButtonColor: 'red',
    confirmButtonText: 'Yes, delete it!',
   
  }).then((result) => {
    if (result.isConfirmed) {
     
      this.employees = this.employees.filter(emp => emp.id !== id);
      if (this.selectedEmployee?.id === id) {
        this.selectedEmployee = null;
      }
      Swal.fire('Deleted!', 'Employee has been deleted.','success');
    }
  });
}
closeDetails(): void {
  this.selectedEmployee = null;
}
}


