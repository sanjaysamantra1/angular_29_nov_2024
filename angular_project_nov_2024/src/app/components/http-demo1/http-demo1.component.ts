import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {

  constructor(private httpClient: HttpClient) {
    // this.fetchDataJavascript();
    this.fetchDataAngular();
  }

  fetchDataJavascript() {
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    let user_Promise = fetch(users_url); // fetch() returns a promise

    // We can get data from promise 1. then() method 2. async await method
    fetch(users_url).then(
      (response) => {
        console.log(response);
        response.json().then(finalResponse => {
          console.log(finalResponse);
        })
      },
      (err) => {
        console.error(err);
      }
    )
  }

  fetchDataAngular() {
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    let user_obs = this.httpClient.get(users_url);
    console.log(user_obs);
    // we can get data from observable from subscribe() method
    this.httpClient.get(users_url).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    )
  }

}
