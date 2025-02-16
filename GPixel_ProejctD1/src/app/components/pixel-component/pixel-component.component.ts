import { Component } from "@angular/core";
import { BodyComponent } from "../body/body.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: "app-pixel-component",
  standalone: true,
  imports: [BodyComponent, CarouselComponent],
  templateUrl: "./pixel-component.component.html",
  styleUrl: "./pixel-component.component.css",
})
export class PixelComponentComponent {}
