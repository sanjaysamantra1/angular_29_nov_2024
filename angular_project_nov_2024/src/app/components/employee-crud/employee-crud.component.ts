import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';
import Swal from 'sweetalert2';

declare var bootstrap: any;

interface Employee {
  name: string;
  position: string;
  dob: string;
  gender?: 'male' | 'female';
}

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe,
    AgePipe,
    SalutationPipe,
    FilterPipe
  ],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit, AfterViewInit {
  @ViewChild('employeeForm') employeeForm!: NgForm;

  employees: Employee[] = [
    { name: 'Chenna Reddy', position: 'Developer', dob: '1990-01-01', gender: 'male' },
    { name: 'Dheeraj', position: 'Topper of the university', dob: '1995-03-22', gender: 'male' },
    { name: 'Chikki Chinni', position: 'Em cheyyaru', dob: '1992-07-15', gender: 'female' },
    { name: 'John', position: 'Venkat Bhaai', dob: '1988-11-09', gender: 'male' },
    { name: 'Jaabilli Sreeja', position: 'Feels Chef', dob: '1999-05-12', gender: 'female' }
  ];

  searchText: string = '';
  selectedEmployee: Employee | null = null;
  newEmployee: Employee = {
    name: '',
    position: '',
    dob: new Date().toISOString().split('T')[0], // Set default to today's date
    gender: 'male'
  };
  private viewEmployeeModal: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeModal();
  }

  initializeModal(): void {
    const modalElement = document.getElementById('viewEmployeeModal');
    if (modalElement) {
      this.viewEmployeeModal = new bootstrap.Modal(modalElement);
      modalElement.addEventListener('hidden.bs.modal', () => {
        this.selectedEmployee = null;
      });
    }
  }

  openAddModal(): void {
    this.newEmployee = {
      name: '',
      position: '',
      dob: new Date().toISOString().split('T')[0], // Set default to today's date
      gender: undefined
    };
    const modalElement = document.getElementById('addEmployeeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  addEmployee(): void {
    if (this.employeeForm.valid) {
      this.employees.push({ ...this.newEmployee });
      Swal.fire({
        title: 'Success',
        text: 'Employee added!',
        icon: 'success'
      });
      
      const modalElement = document.getElementById('addEmployeeModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      }
      
      this.employeeForm.resetForm({
        name: '',
        position: '',
        dob: new Date().toISOString().split('T')[0],
        gender: 'male'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all required fields.',
        icon: 'error'
      });
    }
  }

  viewEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    if (this.viewEmployeeModal) {
      this.viewEmployeeModal.show();
    }
  }

  deleteEmployee(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
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
  input1: number=0;
}