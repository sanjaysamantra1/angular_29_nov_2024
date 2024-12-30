import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CrudopsComponent } from '../crudops/crudops.component';

@Component({
  selector: 'app-parent-crudops',
  imports: [FormsModule, CommonModule, CrudopsComponent],
  templateUrl: './parent-crudops.component.html',
  styleUrl: './parent-crudops.component.css'
})
export class ParentCrudopsComponent {
  emp: any;
  flag: boolean=false;
  selectedEmployee:any;
  displayStyle = 'none';
  input1: String = '';
  input2: String = '';
  input3: String = '';
  input4: String = '';
  openPopup(emp:any) {
    this.selectedEmployee = emp;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  employee = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];


  f1(id: any){
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        this.employee = this.employee.filter((emp: any)=>{
          return emp.eId!=id ? emp : null;})
      }
    });
  }



  addemp(){
    this.employee.push(
      {
        eId: this.input1 as any,
        name: this.input2 as any,
        sal: this.input3 as any,
        gender: this.input4 as any,
      })
    
  }
in1: any;
in2: any;
a: any;

//   async f21(){
//   const { value: formValues } = await Swal.fire({
//     title: "Multiple inputs",
//     html: `
//       <input id="swal-input1" default="a" [(ngModel)]="in1" class="swal2-input">
//       <input id="swal-input2" default="b" [(ngModel)]="in2" class="swal2-input">
//     `,
//     focusConfirm: false,
//     preConfirm: () => {
//       console.log(this.in1);
//       if((document.getElementById("swal-input2").value)!= null){
//         a = document.getElementById("swal-input2").value;
//       }
//       //a = document.getElementById("swal-input2").value;
//       return [

//         // document.getElementById("swal-input1").value,
//          document.getElementById("swal-input2").value
//       ];
//     }
//   });
//   if (formValues) {
//     Swal.fire(JSON.stringify(formValues));
//     console.log(this.in1);
//   }
// }








  async f2(){
    console.log("clicked");
  const { value: formValues } = await Swal.fire({
    title: "Add new Employee",
    html: `
      
    `,
    focusConfirm: true,
    preConfirm: () => {
      return [
        this.input1,this.input2,this.input3,this.input4];
        //document.getElementById("swal-input1").value,
        //document.getElementById("swal-input2").value,
        //document.getElementById("swal-input3").value,
        //document.getElementById("swal-input4").value
      //];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
    console.log(this.input1,this.input4);
    //empid  = document.getElementById("swal-input1").value as any;
    //empname:any =  document.getElementById("swal-input2").value;





    /*employee.push(
      {
        eId: document.getElementById("swal-input1").value,
        name: document.getElementById("swal-input2").value,
        sal: document.getElementById("swal-input3").value,
        gender: document.getElementById("swal-input4").value,
      })*/
      }
  }
  
}
