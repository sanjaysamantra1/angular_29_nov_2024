import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as data from './Users.json';
import Swal from 'sweetalert2';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { MrMissPipe } from '../../pipes/mr-miss.pipe';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';




@Component({
  selector: 'app-assignments',
  imports: [FormsModule,
    OrdinalPipe,
    MrMissPipe,
    SearchFilterPipe
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {

  flag: boolean = false;
  msg: string = '';
  selectedState : any = '';
  selectedOperator: any = '';
  result: any;
  flag1:boolean = true;
  qwerty:string = "text";
  counterValue = 0;
  flag2:boolean =true;
  searchText: string ="";

  users = (data as any).default;
  index: number = 0;
  custompipeinput1: number = 0;


  employee = [
    { eId: 101, name: 'Chenna', sal: 5000, gender: 'male' },
    { eId: 104, name: 'Dhreej', sal: 8000, gender: 'male' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'Sunki', sal: 9000, gender: 'male' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];



  selectedUser1 : any;

  selectedUser(user1: any) {
    this.selectedUser1 = user1;
  }
user123=Object.create(null);
  adddUser(name:any, id:any, salary:any, gender:any){
    this.user123.name = name;
    this.user123.eId = id;
    this.user123.sal = salary;
    this.user123.gender= gender;
    this.employee.push(this.user123);
  }

  operationPerformed(num1: any, num2: any, operation: any){
      // return eval(num1 + operation + num2);

      switch(operation){
        case '+' : 
          return +num1 + +num2;
        case '-' :
          return num1 - num2;
        case '*' :
          return num1 * num2;
        case '/' :
          return num1 / num2;
        default : 
          return null;
      }
  }

  fun1(){
    this.flag1=!this.flag1;
    if(!this.flag1){
      this.qwerty = "text";

    }
    else{
      this.qwerty = "password";

    }
  }

  deleteuser(emp: any){
    this.index = this.employee.indexOf(emp);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.employee.splice(this.index,1);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  }

}