import { Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import * as data from './users.json';

@Component({
  selector: 'app-user-list',
  imports: [NgxPaginationModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users = (data as any).default;
  p:any;

  flag:boolean =true;
  
  clickFlag(){
    this.flag=!this.flag;
  }


}
