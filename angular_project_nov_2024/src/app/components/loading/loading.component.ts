import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  constructor(
    private loadingService: LoadingService,
    // private cdr: ChangeDetectorRef
  ) { }
  isLoading: boolean = false;

  ngOnInit() {
    this.loadingService.loading$.subscribe(val => {
      this.isLoading = val;
      // this.cdr.detectChanges(); //mark for a change detection 
      // ERROR : ExpressionChangedAfterItHasBeenCheckedError: 
      // Expression has changed after it was checked. 
      // Previous value: '-1'. Current value: '0'. 
      // Expression location: _LoadingComponent component.
      // For this I have added ChangeDetectorRef mark for a change detection 
    })
  }
}
