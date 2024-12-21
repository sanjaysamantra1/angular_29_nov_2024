import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RemainingPipe} from '../../pipes/remaining.pipe';
import {AgePipe} from '../../pipes/age.pipe';
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {OrdinalPipe} from '../../pipes/ordinal.pipe';
import {SalutationPipe} from '../../pipes/salutation.pipe';
import {FilterPipe} from '../../pipes/filter.pipe';

@Component({
    selector: 'app-pipes',
    imports: [FormsModule, CommonModule, RemainingPipe, AgePipe, TruncatePipe, OrdinalPipe, SalutationPipe, FilterPipe],
    templateUrl: './pipes.component.html',
    styleUrl: './pipes.component.css',
})
export class PipesComponent {
    amount: number = 5000.45;
    name: string = 'PrAdEEP YendLURI';
    today: Date = new Date();
    user={
        "name": "pradeep",
        "age": 12,
    }
    msg: string = "";
    msg2: string = "";
    dob: Date = new Date();
    longString: string = "asdfasdfd asd fasdddd fasdfdas dfdasdfa sdfdasdf  asdfdas dfasdf asdfdasd fdasdfasdfd";
    cars= ['toyota', 'maruthi', 'ford', 'mustang'];
    inputNumber: number = 0;
    employees = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
        { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
        { eId: 106, name: 'sanjay', sal: 5500, gender: 'male' },
        { eId: 107, name: 'alok', sal: 7001, gender: 'male' },
        { eId: 108, name: 'alok', sal: 7000, gender: 'male' },
    ];
    searchText: string = '';
    filterType: string = '';
}
