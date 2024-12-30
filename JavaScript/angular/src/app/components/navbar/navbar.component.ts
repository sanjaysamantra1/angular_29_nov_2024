import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  
})
export class NavbarComponent {
@Input() isDarkMode! : boolean;
@Output() toggleTheme = new EventEmitter<void>(); 

onToggleTheme():void{
  this.toggleTheme.emit();
}
}

