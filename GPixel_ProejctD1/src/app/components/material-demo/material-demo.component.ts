import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: "app-material-demo",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./material-demo.component.html",
  styleUrl: "./material-demo.component.css",
})
export class MaterialDemoComponent {}
