import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form3',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './template-driven-form3.component.html',
  styleUrl: './template-driven-form3.component.css'
})
export class TemplateDrivenForm3Component {

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
      email: [],
      address: this.fb.group({
        street: [],
        city: [],
        pincode: [],
      })
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
