import { Component } from '@angular/core';
import { LoadingService } from '../../services/service/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  isLoading:boolean=false;

  constructor(public loaderService: LoadingService){}

  // ngOnInit(){
  //   console.log(this.loaderService.loading$);
  //   // this.isLoading=this.loaderService.isLoading;
  //   this.loaderService.loading$.subscribe(val=>{
  //     console.log("val--",val);
  //     this.isLoading=val;
  //     console.log(this.isLoading,"Loader is true");
      
  //   });
  // }
}
