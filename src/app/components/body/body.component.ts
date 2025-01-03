import { Component } from '@angular/core';
import { MyModelComponent } from '../../my-model/my-model.component';

@Component({
  selector: 'app-body',
  imports: [MyModelComponent,],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
