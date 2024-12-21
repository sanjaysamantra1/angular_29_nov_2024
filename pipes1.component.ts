import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../ordinal.pipe';
import { SalutationpipePipe} from '../../salutationpipe.pipe';

@Component({
  selector: 'app-pipes1',
  imports: [CommonModule, FormsModule,OrdinalPipe,SalutationpipePipe],
  templateUrl: './pipes1.component.html',
  styleUrl: './pipes1.component.css'
})
export class Pipes1Component {

  employees = [
    { id: 1, name: 'John Doe', gender: 'male', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', gender: 'female', email: 'jane.smith@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Bob Johnson', gender: 'male', email: 'bob.johnson@example.com', phone: '543-210-6789' },
    { id: 4, name: 'Alice Brown', gender: 'female', email: 'alice.brown@example.com', phone: '678-432-1098' }
  ];

}
