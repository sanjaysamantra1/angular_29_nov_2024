import { HttpClient } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.component.html',
  styleUrl: './signal-demo2.component.css'
})
export class SignalDemo2Component {

  userId = signal(1);
  user: any;
  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  
  increment() {
    this.userId.update(val => val + 1);
    if (this.userId() == 5) {
      this.userDetailsEffect.destroy();
    }
  }
  
  constructor(private httpClient: HttpClient) {
  }
  // ngOnInit() {
  //   this.fetchUserDetails(this.userId())
  // }

  fetchUserDetails(id: any) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.user = response;
    })
  }

}
