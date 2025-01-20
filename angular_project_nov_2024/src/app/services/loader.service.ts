import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();    // loading$ is observable, anyone can consume, here loading component

  constructor() {
  }

  show(){
    this.loadingSubject.next(true);
  }

  hide(){
    this.loadingSubject.next(false);
  }

  
  // the below is without using behaviour subject

  // public isVisible = false;

  // show(){
  //   if (!this.isVisible) {
  //     this.isVisible = true;
  //     Swal.fire({
  //       title: 'Loading...',
  //       text: 'Please wait.',
  //       allowOutsideClick: false,
  //       showConfirmButton: false,
  //       didOpen: () => {
  //         Swal.showLoading();
  //       },
  //     });
  //   }
  // }

  // hide(){
  //   if (this.isVisible) {
  //     Swal.close();
  //     this.isVisible = false;
  //   }
  // }
}