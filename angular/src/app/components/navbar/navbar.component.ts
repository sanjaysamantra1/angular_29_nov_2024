
import { CommonModule } from '@angular/common';
import { Component, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',  
  styleUrl: './navbar.component.css',
  inputs:['mode'],
  outputs:['toggleTheme']
})
export class NavbarComponent {
  mode :any;

  toggleTheme = new EventEmitter() 
  turnDark(){
this.toggleTheme.emit()
   }





}
 


