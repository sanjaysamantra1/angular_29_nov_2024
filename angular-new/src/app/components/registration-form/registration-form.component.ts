import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registration-form',
  imports: [
    FormsModule
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  user = {
    name: '',
    gender: '',
    skills: [],
    country: '',
    message: ''
  };

  countries = ['USA', 'Canada', 'India', 'Australia', 'Germany'];

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      alert('Registration successful!');
    }
  }
}
