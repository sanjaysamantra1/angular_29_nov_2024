import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as data from './assiignments.json';
import* as data1 from './employees.json';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { Child1employeeComponent } from "../child1employee/child1employee.component";
import Swal from 'sweetalert2';
import { OrdinalPipe } from '../../ordinal.pipe';
import { BirthdaypipePipe } from '../../pipes/birthdaypipe.pipe';
import { SalutationpipePipe } from '../../salutationpipe.pipe';
import { InputSearchPipe } from '../../pipes/input-search.pipe';
import { Child2Component } from "../child2/child2.component";




@Component({
  selector: 'app-asiignments',
  imports: [FormsModule,
    CommonModule, Child1employeeComponent, OrdinalPipe, BirthdaypipePipe, SalutationpipePipe, InputSearchPipe, NgxPaginationModule, Child2Component],
  templateUrl: './asiignments.component.html',
  styleUrl: './asiignments.component.css'
  
})
export class AsiignmentsComponent {



  flag : boolean = true;
  val : string = 'this is toggled'



  maxValue :number=100;
  text : string='';




selectedstate : any = 'string';





input3:any;
input4 :any;
result1 :any;
operation1value :any;

operator1() {
  switch (this.operation1value) {
    case '+':
      this.result1 = +this.input3 + +this.input4; 
      break;
    case '-':
      this.result1 = +this.input3 - +this.input4;
      break;
    case '*':
      this.result1 = +this.input3 * +this.input4;
      break;
    case '/':
      this.result1 = +this.input3 / +this.input4;
      break;
    default:
      this.result1 = 'Invalid operator';
  }
}




set :boolean = true;


typeval :any = 'password';



counter :number = 0;

increment(){
  this.counter++;
}
decrement(){
  this.counter--
}
reset(){
  this.counter = 0;
}









toggleView() {
  this.flag=!this.flag;
}




displayStyle: string='none';
viewEmployee: any;

close(){
  
   this.displayStyle='none';
}

view(employee:any) {
  // console.log(employee);
this.displayStyle='block';
this.viewEmployee=employee;
console.log(this.viewEmployee);
}






addemp(){
  this.employees.push(
    { name: 'a', serialNo : '4',designation: 'Software Tester',gender :'male' });

    Swal.fire({
      icon: 'success',  
      title: 'Added Successfully',  
      text: 'The employee has been successfully added!',  
      confirmButtonText: 'OK'  
    });
}


  delete(deleteEmployee: any) {
    
    console.log(deleteEmployee); 
    this.employees = this.employees.filter((employee: any) => {
      return employee.serialNo !== deleteEmployee.serialNo;
    });

    Swal.fire({
      icon: 'success',  
      title: 'deleted Successfully',  
      text: 'The employee has been successfully added!',  
      confirmButtonText: 'OK'  
    });
}



  









users = (data as any ).default;

products : any[] = (data1 as any).default;






employees = [
  { name: 'x', serialNo : '1',designation: 'Software Engineer',gender : 'male' },
  { name: 'y', serialNo : '2',designation:'Project Manager' ,gender : 'female'},
  { name: 'z', serialNo : '3', designation: 'QA Analyst',gender : 'male' },
];



putEvent(newemployee:any){

  this.employees.push(newemployee);

}


birthDate: Date = new Date('1998-05-15');
searchText: any;



searchemployee : string ='';
searchfromtable(){
  this.employees = this.employees.filter(employee=>
    employee.name.toLowerCase().includes(this.searchemployee.toLowerCase())
  );

}






changeColor(): any{
  console.log(this.flag);
  this.flag=!this.flag;
  
  console.log(this.flag);
  if(this.flag){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
}



p :any;
// product: any[] = [];
searchforitem : string ='';


search() {
  // console.log("search--", this.searchforitem);
  this.products = this.products.filter(product =>
    product.title.toLowerCase().includes(this.searchforitem.toLowerCase())
  );
}




sortnewproducts(sortingOrder : string){
if(sortingOrder == 'ascending'){
  this.products = this.products.sort((a, b) => a.price - b.price); 
}
else if (sortingOrder === "descending") {
  this.products = this.products.sort((a, b) => b.price - a.price); 
}



}


}