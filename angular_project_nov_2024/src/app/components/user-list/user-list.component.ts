import { Component } from '@angular/core';
import * as data from './users.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = (data as any).default; 

  p:any;
}
