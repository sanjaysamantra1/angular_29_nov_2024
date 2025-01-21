import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociateCrudService {
  
  private records: any[] = [];  
  private msgSubject = new BehaviorSubject<any[]>(this.records);  

  insertRecord(newRecord:any) {
    // const newRecord = { id, text: message, sal };
    this.records.push(newRecord);
    this.msgSubject.next(this.records); 
  }
  deleteAllRecords() {
    this.records = [];  
    this.msgSubject.next(this.records); 
  }
  getRecord(): Observable<any> {
    return this.msgSubject.asObservable();
  }
  deleteRecord(id:any){
    
    this.records = this.records.filter(record => record.id !== id);  
    this.msgSubject.next(this.records); 
    }
  
  }
