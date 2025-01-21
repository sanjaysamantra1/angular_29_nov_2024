import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpSubjectService {
  deleteEmp(userId: number) {
    throw new Error('Method not implemented.');
  }
  addEmp(newEmp: any) {
    throw new Error('Method not implemented.');
  }
  private empData = new BehaviorSubject<any[]>([]);
  constructor(private httpClient: HttpClient) { }


  fetchEmp():void{
    this.httpClient.get<any[]>('./employees.json').subscribe(emp => {
      this.empData.next(emp);
    });
  }
  
  getEmp(): Observable<any[]> {
      return this.empData.asObservable();
      
  }
    
  addUser(emp: any): void {
      const currentEmp = this.empData.getValue();
      emp.id = currentEmp.length ? currentEmp[currentEmp.length - 1].id + 1 : 1; 
      currentEmp.push(emp);
      this.empData.next(currentEmp); 
  }

  deleteUser(empId: number): void {
      const currentEmp = this.empData.getValue().filter(user => user.id !== empId);
      this.empData.next(currentEmp); 
    }

}

