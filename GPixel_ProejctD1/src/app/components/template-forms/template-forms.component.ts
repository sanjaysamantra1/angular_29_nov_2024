import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-template-forms",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./template-forms.component.html",
  styleUrl: "./template-forms.component.css",
})
export class TemplateFormsComponent {
  member = {
    Name: "",
    email: "",
    salary: 2000,
    details: {
      constituency: "",
      position: "",
    },
  };

  submit(formData: any) {
    console.log(formData);
  }
  reset(myForm: NgForm) {
    console.log(myForm);
    myForm.resetForm();
  }
}
