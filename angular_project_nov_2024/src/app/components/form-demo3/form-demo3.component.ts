import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ageRangeValidator } from '../../validators/ageRangeValidator';
import { passwordMatchValidator } from '../../validators/passwordmatchvalidator';

@Component({
  selector: 'app-form-demo3',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})

export class FormDemo3Component {
  registerForm: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.usingFormGroup();
    this.usingFormBuilder();
  }

  usingFormGroup() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('sachin', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl(),
      })
    }, { updateOn: 'blur' });
  }

  usingFormBuilder() {
    this.registerForm = this.fb.group({
      firstName: ['sachin', [Validators.required, Validators.minLength(5)]],
      lastName: [],
      age: [25, [Validators.required, ageRangeValidator(18, 60)]],
      email: [],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      address: this.fb.group({
        street: [],
        city: [],
        pincode: [],
      })
    // }, { validators: passwordMatchValidator() })
    })
  }

  submitMyForm(formData: any) {
    console.log(formData)
    console.log(formData.value)
  }

  setFormValue() {
    this.registerForm.setValue({ firstName: 'aaa', lastName: 'bbb' })
  }

  patchFormValue() {
    this.registerForm.patchValue({ firstName: 'aaaa', lastName: 'bbbb' })
  }
}
