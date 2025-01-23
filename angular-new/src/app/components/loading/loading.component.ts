import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {
  showLoader: boolean = false;

  constructor(private loader: LoaderService) { }

  ngOnInit(){
    this.loader.loading$.subscribe(value =>{
      this.showLoader = value;
      console.log(this.showLoader, "Loader");
    })
  }
}
