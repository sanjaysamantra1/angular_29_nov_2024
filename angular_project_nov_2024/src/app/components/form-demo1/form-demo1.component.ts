import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo1',
  imports: [
    FormsModule
  ],
  templateUrl: './form-demo1.component.html',
  styleUrl: './form-demo1.component.css'
})
export class FormDemo1Component {
  name: string = '';
  age: number = 0;
}
