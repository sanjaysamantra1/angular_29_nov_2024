import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { PipesComponent } from '../pipes/pipes.component';

@Component({
  selector: 'app-body',
  imports: [PipesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
