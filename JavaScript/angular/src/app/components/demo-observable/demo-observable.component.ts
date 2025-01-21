import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-observable',
  imports: [],
  templateUrl: './demo-observable.component.html',
  styleUrl: './demo-observable.component.css'
})
export class DemoObservableComponent {

  searchResult$ : Observable<any> | undefined;
  searchForm: any;

  constructor(private http:HttpClient){
    this.searchForm
  }
}
