import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/service/loading.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-http-demo1',
  imports: [LoaderComponent],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component implements OnInit{

  users: any;
  isDataLoaded: boolean=false;

  constructor(private httpClient:HttpClient){
  }

  ngOnInit(){
    this.fetchDataJavascript();
  }

  fetchDataJavascript(){
    
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(users_url).subscribe((response)=>{
      console.log(response);
      this.users=response;
      this.isDataLoaded=true;
    },
    (err)=>{
      console.error(err);
      this.isDataLoaded=true;
    }
  )
  }


  // fetchDataJavascript() {
  //   const users_url = 'https://jsonplaceholder.typicode.com/users';
  //   // let user_Promise = fetch(users_url); // fetch() returns a promise
  //   // We can get data from promise 1. then() 2. async await
  //   fetch(users_url).then(
  //     (response) => {
  //       console.log(response);
  //       response.json().then(finalResponse => {
  //         console.log(finalResponse)
  //         this.users=finalResponse;
  //       })
  //     },
  //     (err) => {
  //       console.log(err)
  //     }
  //   );

  // }

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
