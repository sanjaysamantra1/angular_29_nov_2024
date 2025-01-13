import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  isLoading: boolean = false;
  LoadingService = new LoadingService();

  // constructor(private LoadingService: LoadingService) {
  // }
  ngOnInit() {
    this.LoadingService.loading$.subscribe(val => {
      this.isLoading = val;
      console.log('service value changed.....', val)
    });
  }
}
