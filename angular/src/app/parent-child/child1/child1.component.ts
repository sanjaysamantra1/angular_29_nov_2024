
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
  
})
export class Child1Component {

  @Output() employeeAdded = new EventEmitter<any>();

  newEmployee = { name: '', position: '', department: '' };

  onAddEmployee() {
    if (!this.newEmployee.name || !this.newEmployee.position || !this.newEmployee.department) {
      Swal.fire('Please fill all fields', '', 'error');
      return;
    }
    this.employeeAdded.emit({ ...this.newEmployee });
    this.newEmployee = { name: '', position: '', department: '' };
  }



}
