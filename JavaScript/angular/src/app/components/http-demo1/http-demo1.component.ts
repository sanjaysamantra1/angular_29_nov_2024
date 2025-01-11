import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {

  constructor(){
    this.fetchDataJavascript();
  }

  fetchDataJavascript(){
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    fetch(users_url);
  }

}
