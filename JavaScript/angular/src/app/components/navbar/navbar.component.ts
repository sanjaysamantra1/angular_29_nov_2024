import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

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

onToggleTheme():void{
  this.toggleTheme.emit();
}
}

