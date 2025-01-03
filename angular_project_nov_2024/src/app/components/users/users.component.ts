import { Component } from '@angular/core';
import * as data from './users.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users',
  imports: [FormsModule,NgxPaginationModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = (data as any).default; 
  flag= true;
p:any;


  onClickChange(){
    if(this.flag){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
}