import { Component } from '@angular/core';
import * as apiData from './members.json';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-ops',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './crud-ops.component.html',
  styleUrl: './crud-ops.component.css'
})

export class CrudOpsComponent {
members : any =(apiData as any).default;
flag: boolean=false;
selectedMember:any;
displayStyle = 'none';
displayDeleteStyle = 'none';
displayAddMemberStyle = 'none';
tempMember:any ={
  memberId: '',
  name:'',
  gender:'',
  sal:''

};
memName: any;
openView(member:any) {
  this.selectedMember = member;
  this.displayStyle = 'block';
}
openDeleteView(member: any){
  this.selectedMember = member;
  this.displayDeleteStyle = 'block';
}
closePopup() {
this.displayStyle = 'none'; 
this.displayDeleteStyle = 'none'; 
this.displayAddMemberStyle = 'none'
}
deleteMember() { 
  this.members = this.members.filter((member:any)=>{
    return member.memberId !==this.selectedMember.memberId ;
  })
  this.closePopup();
  }
  addMember() {
    this.members.push({...this.tempMember});
    this.memName = this.tempMember.name;
    this.tempMember ={
      memberId: '',
      name:'',
      gender:'',
      sal:''
    };
    this.closePopup();
    Swal.fire(`Added ${this.memName} to Elite Member List`);
  }
  createMember(){
    this.displayAddMemberStyle='block';
  }
}
