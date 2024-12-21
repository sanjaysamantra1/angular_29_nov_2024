import { Component, Inject, Renderer2, OnInit} from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent,
    FormsModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
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
