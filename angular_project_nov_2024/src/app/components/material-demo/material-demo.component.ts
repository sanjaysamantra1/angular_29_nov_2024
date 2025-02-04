import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactusComponent } from '../contactus/contactus.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-demo',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.css'
})
export class MaterialDemoComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ContactusComponent);
  }
}
