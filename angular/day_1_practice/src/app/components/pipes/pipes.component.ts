import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-pipes',
    imports: [FormsModule, CommonModule],
    templateUrl: './pipes.component.html',
    styleUrl: './pipes.component.css',
})
export class PipesComponent {
    amount: number = 5000.45;
    name: string = 'PrAdEEP YendLURI';
    today: Date = new Date();
}
