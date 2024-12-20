import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
declare var bootstrap: any;

interface Employee {
  name: string;
  position: string;
}

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit, AfterViewInit {
  @ViewChild('employeeForm') employeeForm!: NgForm;

  employees: Employee[] = [
    { name: 'Chenna Reddy', position: 'Developer' },
    { name: 'Dheeraj', position: 'Topper of the university' },
    { name: 'chikki Chinni ', position: 'Em cheyyaru' },
    { name: 'John ', position: 'Venkat Bhaai' },
    { name: 'Jaabilli Sreeja', position: 'Feels Chef' }
  ];

  selectedEmployee: Employee | null = null;
  newEmployee: Employee = { name: '', position: '' };
  private viewEmployeeModal: any;

  ngOnInit(): void {
    // Initialize any necessary data
  }

  ngAfterViewInit(): void {
    this.initializeModal();
  }

  // Initialize the modal and set up event listeners
  initializeModal(): void {
    const modalElement = document.getElementById('viewEmployeeModal');
    if (modalElement) {
      this.viewEmployeeModal = new bootstrap.Modal(modalElement);
      
      modalElement.addEventListener('hidden.bs.modal', () => {
        this.selectedEmployee = null; // Reset selected employee
        this.refreshPage();
      });
    }
  }

  // Open the "Add Employee" modal
  openAddModal(): void {
    this.newEmployee = { name: '', position: '' };
    const modal = new bootstrap.Modal(document.getElementById('addEmployeeModal'));
    modal.show();
  }

  // Add a new employee
  addEmployee(): void {
    if (this.employeeForm.valid) {
      this.employees.push({ ...this.newEmployee });
      Swal.fire({
        title: 'Success',
        text: 'Employee added successfully!',
        icon: 'success'
      });
      const modal = bootstrap.Modal.getInstance(document.getElementById('addEmployeeModal'));
      modal.hide();
      this.employeeForm.resetForm(); // Clear form inputs
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all required fields.',
        icon: 'error'
      });
    }
  }

  // View an employee's details
  viewEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    if (this.viewEmployeeModal) {
      this.viewEmployeeModal.show();
    }
  }

  // Delete an employee
  deleteEmployee(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees.splice(index, 1);
        Swal.fire({
          title: 'Deleted!',
          text: 'Employee has been removed.',
          icon: 'success'
        });
      }
    });
  }

  // Refresh the page or update the state
  refreshPage(): void {
    // Any logic you need to refresh or update the page can be placed here
    console.log('Modal closed, page refreshed or updated.');
  }
}
