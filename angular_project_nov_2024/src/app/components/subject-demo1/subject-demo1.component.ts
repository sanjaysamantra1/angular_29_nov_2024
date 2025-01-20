import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.component.html',
  styleUrl: './subject-demo1.component.css'
})
export class SubjectDemo1Component {
  ngOnInit() {
    // this.subjectDemo();
    // this.behaviorSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }
  subjectDemo() {
    let mySubject = new Subject(); // Publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2', val));
    mySubject.next('CCCCC');
  }
  behaviorSubjectDemo() {
    let mySubject = new BehaviorSubject('Default Value...'); // Publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2', val));
    mySubject.next('CCCCC');
  }
  replaySubjectDemo() {
    let mySubject = new ReplaySubject(); // Publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2', val));
    mySubject.next('CCCCC');
  }
  asyncSubjectDemo() {
    let mySubject = new AsyncSubject(); // Publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2', val));
    mySubject.next('CCCCC');
    mySubject.complete();
  }
}