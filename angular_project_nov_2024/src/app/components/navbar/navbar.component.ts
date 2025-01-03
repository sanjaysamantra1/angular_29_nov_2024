import { Component,  Inject,  Renderer2, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isDarkTheme = false;


  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document ) {}

  ngOnInit() : void {
    // Initialize the theme based on default or user preferences
    this.updateTheme();
  }
  toggleTheme() {
    console.log("this.isDarkTheme");
    this.isDarkTheme = !this.isDarkTheme;
    this.updateTheme();
  }

  updateTheme() {
    const body = this.document.body;
    if (this.isDarkTheme) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
      
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }

}
