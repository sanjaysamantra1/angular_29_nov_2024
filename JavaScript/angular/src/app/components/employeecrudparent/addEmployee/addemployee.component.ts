import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  imports: [FormsModule,CommonModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css',
  outputs:['addEmp']
})
export class AddemployeeComponent {


newEmployee = {eId:0,name:'',sal:0,gender:'Male'};

addEmp = new EventEmitter<any>();

addEmployee(){
  console.log('Adding employee:', this.newEmployee);
  this.addEmp.emit(this.newEmployee);
  console.log(this.newEmployee);
  this.newEmployee = {eId:0,name:'',sal:0,gender:'Male'};
  console.log(this.newEmployee);
  
}

}
