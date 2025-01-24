import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  imports: [FormsModule, CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  user = {
    firstName: '',
    lastName: 'Kohli',
    email: 'Virat@gmail.com',
    address: {
      street: "",
      city: "",
      pincode: "123456"
    }
  }
  submitMyForm(formData: any) {
    console.log(formData)
  }
  reset(myForm :NgForm) {
    console.log(myForm)
    console.log('Do Something...');
    myForm.resetForm();
  }
}
