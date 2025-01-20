import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  isLoading: boolean = false;

  constructor(private loaderService: LoaderService){
  }

  ngOninit(){
    this.loaderService.loading$.subscribe(val => {
      this.isLoading = val;
      console.log('service value changed', val);
    })
  }

}
