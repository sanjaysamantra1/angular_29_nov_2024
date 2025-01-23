import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  imports: [FormsModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {
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
