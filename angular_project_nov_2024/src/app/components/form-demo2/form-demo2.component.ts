import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})

export class FormDemo2Component {

  user = {
    firstName: 'Dheeraj',
    lastName: 'Maddula',
    email: 'madduladheeraj03@gmail.com',
    address: {
      street: '',
      city: '',
      pincode: '500085'
    }
      
  }

  submitMyForm(formData: any){
    console.log(formData);
  }

  reset(myForm :NgForm){
    console.log('Do something...');
    myForm.resetForm();
  }
}