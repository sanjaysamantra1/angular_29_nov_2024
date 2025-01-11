import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpcrudService {

  private myJsonUrl = "http://localhost:3000/empcrud"
  res: any;

  constructor(private http: HttpClient) {

  }


  getEmployees() {
    return this.http.get(this.myJsonUrl);
  }


  addEmployees(emp: any) {
    return this.http.post(this.myJsonUrl, emp);
  }

  updateEmployees(id: any, emp: any) {
    return this.http.put(`${this.myJsonUrl}/${id}`, emp);
  }


  deleteEmployees(id: any) {
    return this.http.delete(`${this.myJsonUrl}/${id}`)
  }

}
