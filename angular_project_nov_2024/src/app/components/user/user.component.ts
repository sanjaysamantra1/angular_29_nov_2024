import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserFormComponent } from '../user-form/user-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [NgxPaginationModule, UserFormComponent, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users: any;
  isLoading: boolean = false;
  p: any;
  flag: boolean = true;
  showFlag: boolean = false;
  selectedEmployee: any = '';
  id: number = 0;
  eName: string = '';
  eSalary: number = 0;
  eGender: string = '';
  updateUserObject = Object.create(null);
  updateUserId: number = 0;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // console.log("Users from onInit", this.userService.getUsers());
    if (this.users === undefined) {
      this.isLoading = !this.isLoading;
      this.getUsers();
    } 
  }

  getUsers() {
    this.userService.get().subscribe((data: any) => {
      this.users = data;
    });
  }

  ngDoCheck() {
  }

  onClickChange() {
    return this.flag = !this.flag;
  }

  getCurrentRecord(employee: any) {
    console.log("Current Record ", employee.eId);
    this.showFlag = !this.showFlag;
    this.selectedEmployee = employee;
  }

  getRecordToDelete(employee: any) {
    console.log("Delete ", employee);
    this.userService.deleteUser(employee.id).subscribe(data => {
      console.log(data);
      this.getUsers();
    });
  }

  insertNewRecord(employeeObject: any) {
    console.log(employeeObject);
    this.userService.saveUser(employeeObject).subscribe(data => {
      console.log(data);
      this.getUsers();
    });
  }

  getRecordToUpdate(employee: any) {
    console.log("Update ", employee);
    this.updateUserId = employee.id;
    this.eName = employee.name;
    this.eSalary = employee.sal;
    this.eGender = employee.gender;
    console.log(this.eName);
  }

  updateNewRecord() {
    this.updateUserObject.name = this.eName;
    this.updateUserObject.sal = this.eSalary;
    this.updateUserObject.gender = this.eGender;
    console.log(this.updateUserId);
    console.log(this.updateUserObject);
    this.userService.updateUser(this.updateUserId, this.updateUserObject).subscribe(data => {
      console.log(data);
      this.getUsers();
    });
  }

}
