import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  inputs:['isDarkMode'],
  outputs:['toggleTheme']
})
export class NavbarComponent {

  isDarkMode:any;
  

toggleTheme = new EventEmitter();
onToggleTheme(){
  this.toggleTheme.emit();
}
}

