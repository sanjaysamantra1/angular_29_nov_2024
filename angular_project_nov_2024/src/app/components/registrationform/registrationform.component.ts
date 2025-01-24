import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css'
})
export class RegistrationformComponent {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.withFormBuilder();
  }

  withFormBuilder() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      subscribe: [false],
      address: this.formBuilder.group({
        city: ['', Validators.required],
        state: [''],
        pin: ['', [Validators.minLength(5)]],
      }),
      comments: [''],
      country: ['', Validators.required]
    });
  }

  submit(registerForm: FormGroup) {
    console.log('Form Submitted:', registerForm.value);
  }
}
