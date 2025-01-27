import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form2',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './template-driven-form2.component.html',
  styleUrl: './template-driven-form2.component.css'
})
export class TemplateDrivenForm2Component {

  user = {
    firstName : '',
    lastName : 'Tummepalli',
    email: 'dhanush@gmail.com',
    address : {
      street : '1631 Silver spur ln',
      city: 'knoxville',
      zip: '37932'
    }
  }

  submitMyForm(myForm: any) {
    console.log(myForm);
  }

  reset(myForm: NgForm) {
    console.log(myForm);
    console.log("Do Something......");
    myForm.resetForm();
  }
}
