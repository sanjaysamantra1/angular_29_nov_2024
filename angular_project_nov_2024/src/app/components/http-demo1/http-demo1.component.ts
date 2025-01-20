import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})

export class HttpDemo1Component {

  constructor(private httpClient : HttpClient){
    this.fetchDataJavaScript();
    this.fetchDataAngular();
  }

  fetchDataJavaScript(){
    const users_url = 'https://jsonplaceholder.typicode.com/users';

    //let user_Promise = fetch(users_url); // fetch() returns a promise
    // we can get data from promise using then() & async await

    fetch(users_url).then(
      (response) => {
        console.log(response);
        response.json().then(finalResponse => {
          console.log(finalResponse);
        })
      },
      (error) => {
        console.error(error);
      }
    )
  }

  fetchDataAngular(){
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    // let users_obj = this.httpClient.get(users_url);
    // console.log(users_obj);
    // we can get data from observable using subscribe()
    // subscribe() is a higher order function which takes 3 callback functions

    this.httpClient.get(users_url).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    )
  }


  fetchDataAngular2(){
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(users_url, { observe : "response" }).subscribe({
      next : (response) => {
        console.log(response);
      },
      error : (error) => {
        console.log(error);
      },
      complete : () => {
        console.log('completed');
      }
    });
  }
}