import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadIcon = new BehaviorSubject<boolean>(false);
  isLoading = this.loadIcon.asObservable();
  loading$: any;

  constructor() {}

  show(): void {
    this.loadIcon.next(true);
  }

  hide(): void {
    this.loadIcon.next(false);
  }
}
