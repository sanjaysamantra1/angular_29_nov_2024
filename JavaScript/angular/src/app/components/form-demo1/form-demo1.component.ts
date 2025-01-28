import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo1',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-demo1.component.html',
  styleUrl: './form-demo1.component.css'
})
export class FormDemo1Component {

  user = {
    firstName: '',
    lastName: '',
    gender: '',
    hobbies: true,
    country: '',
    about: ''
  };

  countries = ['United States', 'Canada', 'Australia', 'India'];

  submitForm(myForm: any) {
    console.log('Form Submitted!', myForm.value);
  }

  resetForm(myForm: any) {
    console.log('Form is Reset!');
    myForm.resetForm();
  }
}
