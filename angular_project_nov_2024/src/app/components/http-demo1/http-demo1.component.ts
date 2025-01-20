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
    // this.fetchDataAngular();
    this.fetchDataAngular2();
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
    this.httpClient.get(users_url).subscribe( // subscribe is a higherOrder, takes 3 callbacks
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

  fetchDataAngular2() {
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(users_url, { observe: 'response' }).subscribe({
      next: (response) => {
        // by default there will be { observe: 'response' }
        console.log(response); // from here we cen get the status code when we set the second parameter to { observe: 'response' }
        console.log(response.body) // if observe is 'response' then we need to access data from response.body
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("All data received");
      }
    })
  }
}
