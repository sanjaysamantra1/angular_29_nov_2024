import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  constructor(private httpClient:HttpClient){
    //this.fetchDataJavascript();
    //this.fetchDataAngular();
    this.fetchDataAngular2();
  }
  fetchDataJavascript(){
    const user_url='https://jsonplaceholder.typicode.com/users';
    //let user_Promise=fetch(user_url) //fetch method returns a promise
    //we can get data from promise by using 1.then() 2.async await
    fetch(user_url).then(
      (response)=>{
        console.log(response);
        response.json().then(finalResponse =>{
          console.log(finalResponse)
        })
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  fetchDataAngular(){
    const user_url='https://jsonplaceholder.typicode.com/users';
    let user_obs=this.httpClient.get(user_url);
    this.httpClient.get(user_url).subscribe(
      (response)=>{
        console.log(response)
      },
      (err)=>{console.log(err)},
      ()=>{
        console.log('completed');
      }
    )
  }
  fetchDataAngular2(){
    const user_url='https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(user_url,{ observe: 'body' }).subscribe({
      next:(response)=>{
        console.log(response)

      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log('all data received')
      }
    })
  }

}
