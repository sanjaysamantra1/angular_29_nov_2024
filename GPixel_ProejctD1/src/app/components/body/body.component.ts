import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: "app-body",
  standalone: true,
  imports: [RouterOutlet, CarouselComponent],
  templateUrl: "./body.component.html",
  styleUrl: "./body.component.css",
})
export class BodyComponent {
  flag: boolean = false;
  color: any;
  changeColor(): any {
    console.log(this.flag);
    this.flag = !this.flag;

    console.log(this.flag);
    if (this.flag) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }
}
