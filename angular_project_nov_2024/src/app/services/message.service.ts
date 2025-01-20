import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgSubject = new Subject<any>();
  sendMessage(message: string) {
    this.msgSubject.next({ text: message }); // publishing a message
  }
  clearMessages() {
    this.msgSubject.next(null);  // publishing null
  }
  getMessage(): Observable<any> {
    return this.msgSubject.asObservable();
  }
}