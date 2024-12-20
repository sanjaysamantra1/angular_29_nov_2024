import { Component, Inject, Renderer2,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-demo1',
  imports: [
    FormsModule
  ],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}
  
  ngOnInit(): void {
    // Initialize the mode based on default or user preferences
    this.applyTheme();
  }
  
  toggleDarkMode() {
    console.log("Mode toggled:", this.isDarkMode);
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }
  
  applyTheme() {
    const body = this.document.body;
    if (this.isDarkMode) {
      this.renderer.removeClass(body, 'light-mode');
      this.renderer.addClass(body, 'dark-mode');
    } else {
      this.renderer.removeClass(body, 'dark-mode');
      this.renderer.addClass(body, 'light-mode');
    }
  }  
}
