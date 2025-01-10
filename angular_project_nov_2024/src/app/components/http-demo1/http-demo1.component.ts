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
    // let user_Promise = fetch(users_url); // fetch() returns a promise
    // We can get data from promise 1. then() 2. async await
    fetch(users_url).then(
      (response) => {
        console.log(response);
        response.json().then(finalResponse => {
          console.log(finalResponse)
        })
      },
      (err) => {
        console.log(err)
      }
    );

  }

  fetchDataAngular() {
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(users_url).subscribe( // subscribe() is a higherOrder,takes 3 callback
      (response) => {
        console.log(response)
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log('completed')
      }
    );
  }

  fetchDataAngular2() {
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(users_url, { observe: 'response' }).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('all data received')
      }
    })
  }

}
