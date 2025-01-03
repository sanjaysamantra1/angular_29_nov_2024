import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-directives',
  imports: [FontAwesomeModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  fastar= faStar;
  employees = [
    { id: 1, name: 'Sagar', position: 'Website Developer', department: 'IT'},
    { id: 2, name: 'simpson', position: 'SALES Person', department: 'Marketing' },
    { id: 3, name: 'Khan', position: 'Designer', department: 'Design'},
    { id: 4, name: 'Singh', position: 'HR Specialist', department: 'Human Resources' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


