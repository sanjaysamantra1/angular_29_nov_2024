import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmpCrudHttpService {

  employees: any;
  employeeObject = Object.create(null);
  emp_url = "http://localhost:3000/emp"

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.emp_url);    
  }

  saveEmployee(empDetails: any) {
    return this.httpClient.post(this.emp_url, empDetails);
  }

  deleteEmployee(eId: number) {
    let delete_url = this.emp_url + "/" + eId;
    return this.httpClient.delete(delete_url);
  }

  updateEmployee(eId: string, updateObject: any) {
    let update_url = this.emp_url + "/" + eId;
    return this.httpClient.patch(update_url, updateObject);
  }

}
