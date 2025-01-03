import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  inputs : ['isDark'],
  outputs :['toggleMode']
})
export class NavbarComponent {
isDark :any;
toggleMode = new EventEmitter<void>();

inToggleMode():void{
  this.toggleMode.emit();
}

}
