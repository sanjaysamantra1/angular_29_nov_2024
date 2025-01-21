import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  // loading: boolean = false;


  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  // constructor() { }

  show() {
    // this.isLoading =true;
    console.log("LoadingService - show()");
    
    this.loadingSubject.next(true);
  }

  hide() {
    // this.isLoading = false;
    console.log("LoadingService - hide()");

    this.loadingSubject.next(false);
  }

  // isLoading(): boolean {
  //   console.log("load");

  //   return this.loading;
  // }

}