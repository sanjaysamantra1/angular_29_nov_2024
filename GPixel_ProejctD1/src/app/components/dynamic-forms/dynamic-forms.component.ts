import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-dynamic-forms",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./dynamic-forms.component.html",
  styleUrl: "./dynamic-forms.component.css",
})
export class DynamicFormsComponent {
  empForm!: FormGroup;
}
