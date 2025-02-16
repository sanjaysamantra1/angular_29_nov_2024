import { Component } from "@angular/core";
import { BodyComponent } from "../body/body.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { RouterOutlet } from "@angular/router";
import { PixelComponentComponent } from "../pixel-component/pixel-component.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    BodyComponent,
    CarouselComponent,
    RouterOutlet,
    PixelComponentComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
