import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isVisible = false;

  constructor() {
  }

  show(){
    if (!this.isVisible) {
      this.isVisible = true;
      Swal.fire({
        title: 'Loading...',
        text: 'Please wait.',
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }

  hide(){
    if (this.isVisible) {
      Swal.close();
      this.isVisible = false;
    }
  }
}
