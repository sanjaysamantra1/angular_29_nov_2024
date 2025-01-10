import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: any = [];
  copyData: any;
  
  constructor(private httpobj: HttpClient) {
    this.httpobj.get("http://localhost:8080/employee/").subscribe(Response=>{
      //console.log(Response);
      this.employee= Response;
      this.copyData = this.employee
    });
    //this.copyData = this.employee;
    //console.log("from the service1"+this.employee)
  }
  
  
  getEmployees(){
    
    //console.log("from the method"+this.copyData);
    return this.employee;
  }
  getFilteredEmp(s: String){
    this.copyData= this.getEmployees();
    // console.log("Before"+s)
    this.copyData= this.copyData.filter((emp: any) => {

      return emp.empGender === s;
    });
    // console.log(this.copyData)
    return this.copyData;
  }
}
