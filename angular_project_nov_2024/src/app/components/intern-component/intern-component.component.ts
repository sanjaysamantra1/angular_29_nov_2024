import { Component } from '@angular/core';
import { InternServiceService } from '../../services/intern-service.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intern-component',
  imports: [FormsModule],
  templateUrl: './intern-component.component.html',
  styleUrl: './intern-component.component.css'
})

export class InternComponentComponent {

  constructor(public internserv :InternServiceService){}
 
  interns:any;
  eId: number = 0;
  Name: string = "";
  sal: number = 0;
  gender: string = "";
  
  intern=Object.create(null);
  ngOnInit() {
    // console.log("Interns from onInit", this.Internservice.getInterns());
    if (this.interns === undefined) {
      this.getInterns();
    } 
  }

  getInterns() {
    this.internserv.getInterns().subscribe((data: any) => {
      this.interns = data;
    });
  }

addInternComp(){
  this.intern.eId=this.eId;
  this.intern.Name=this.Name;
  this.intern.sal=this.sal;
  this.intern.gender=this.gender;
  this.internserv.addIntern(this.intern).subscribe(data=>{
    console.log(data);
    this.getInterns();
  });
  console.log(this.intern);
}
deleteInternComp(id:any){
  this.internserv.deleteIntern(id).subscribe(data=>{
    console.log(this.intern.id);
    this.getInterns();

  });
}


}
