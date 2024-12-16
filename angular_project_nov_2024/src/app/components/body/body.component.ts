<<<<<<< HEAD
import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';

@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent,
    DirectivesComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

=======
.body{
    min-height: 100px;
}
.h3{
    text-align: left;
>>>>>>> 11055343448321677fb182f7b872e40ff6db1b7c
}
