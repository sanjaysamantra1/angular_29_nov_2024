import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Ensure this is imported for [(ngModel)]

@Component({
  selector: 'app-assignment2',
  standalone: true, 
  imports: [CommonModule, FormsModule], // Use only valid imports here
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component {
  employees = [
    { id: 1, name: 'Neelam Sanjiva Reddy', department: '1956–1960' },
    { id: 2, name: 'Damodaram Sanjivayya', department: '1960–1962' },
    { id: 3, name: 'Kasu Brahmananda Reddy', department: '1964–1971' },

  ];

  selectedEmployee: any = null;
  isModalOpen = false;
  newEmployee = { id: 0, name: '', department: '' };

  addEmployee() {
    if (!this.newEmployee.name || !this.newEmployee.department) {
      alert('Please fill all fields.');
      return;
    }
    this.newEmployee.id = this.employees.length + 1;
    this.employees = [...this.employees, { ...this.newEmployee }];
    this.newEmployee = { id: 0, name: '', department: '' };
    alert('Chief Minister Added Successfully!');
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.employees = this.employees.filter((employee) => employee.id !== id);
      alert('Record Deleted Successfully!');
    }
  }

  viewEmployee(employee: any) {
    this.selectedEmployee = employee;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  trackById(index: number, employee: any) {
    return employee.id;
  }
}
