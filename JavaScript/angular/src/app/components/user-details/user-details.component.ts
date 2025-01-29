import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  user: any;
  userInfo:any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((paramObj: any) => {
      this.http.get(`https://jsonplaceholder.typicode.com/users/${paramObj.id}`).subscribe(response => {
        this.user = response;
      });
      this.http.get(`https://www.w3schools.com/html/html_editors.asp`).subscribe(response => {
        this.userInfo = response;
      });
    });
  }

}
