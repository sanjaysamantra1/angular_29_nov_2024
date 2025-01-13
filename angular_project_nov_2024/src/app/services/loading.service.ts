import { inject, Injectable } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() {

  }
  //loadingCompObj = inject(LoadingComponent);

  loadingCompObj = new LoadingComponent();
  show(){
    this.loadingCompObj.show();
  }
  hide(){
    this.loadingCompObj.hide();
  }
}
