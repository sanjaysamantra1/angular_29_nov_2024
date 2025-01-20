import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { DemouserService } from '../../services/demouser.service';

@Component({
  selector: 'app-demo-user',
  imports: [],
  templateUrl: './demo-user.component.html',
  styleUrl: './demo-user.component.css'
})
export class DemoUserComponent {
  users: Iuser[]=[];

  isLoading:boolean=false;
  constructor(private demouserService:DemouserService){
  }
  ngOnInit(){
    this.demouserService.getAllUsers().subscribe((response:Iuser[])=>{
      this.users=response;

    })
      
  }

}
