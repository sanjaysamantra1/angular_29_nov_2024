import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { SalutationPipe } from '../../pipes/salutation.pipe';

@Component({
  selector: 'app-pipes',
  imports: [OrdinalPipe,FormsModule,SalutationPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
num: any;

}
