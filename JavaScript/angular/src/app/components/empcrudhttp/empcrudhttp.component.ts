import { Component } from '@angular/core';
import { EmpcrudService } from '../../services/service/empcrud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empcrudhttp',
  imports: [FormsModule],
  templateUrl: './empcrudhttp.component.html',
  styleUrl: './empcrudhttp.component.css'
})
export class EmpcrudhttpComponent {

  employees: any[] = [];
  isLoading = false;
  // isModalOpen =false;
  isEditMode = false;
  formData: any = { id: '0', name: '', sal: 0, gender: '' };



  constructor(private empCrud: EmpcrudService) {

  }


  ngOnInit() {
    this.fetchEmployees();
    console.log(this.employees);

  }


  fetchEmployees() {
    this.isLoading = true;
    this.empCrud.getEmployees().subscribe((data: any) => {
      this.employees = data;
      this.isLoading = false;
    },
      (err) => {
        console.error('Error Fetching Details', err);
      }
    );
  }


  openForm(mode:string,emp?:any){
    // this.isModalOpen=true;
    this.isEditMode = mode === 'update';

    if(this.isEditMode){
      this.formData = {...emp};
      console.log(this.formData);
      
    }
    else{
      // console.log(this.employees[(this.employees.length-1)]);
      const lastVal = this.employees[(this.employees.length-1)];

      console.log(lastVal);
      
      // idVal=this.employees[(this.employees.length)-1]+1;
      this.formData={ id: ++lastVal.id, name: '', sal: 0, gender: ''};
      console.log(this.formData);
      
    }
  }

  // closeForm(){
  //   // this.isModalOpen=false;
  //   this.formData={ eId: 0, name: '', sal: 0, gender: ''};
  // }


  submitForm(){
    if(this.isEditMode){
      this.empCrud.updateEmployees(this.formData.id,this.formData).subscribe(
        (res)=>{
          this.fetchEmployees();
          // this.closeForm();
        }
      );
    }
    else{
      // ++this.formData.eId;
      this.empCrud.addEmployees(this.formData).subscribe(
        (res)=>{
          this.fetchEmployees();
          // this.closeForm();
    }
  );
  }
  this.formData={ eId: 0, name: '', sal: 0, gender: ''};
}


  deleteEmp(id:number){
    console.log(id);
    
    this.empCrud.deleteEmployees(id).subscribe(
      (res)=>{
        console.log('Employee deleted', res); 
        this.fetchEmployees();    
  },
  (err)=>{
    console.error('Error deleting employee:', err); 
  }
);
}


}
