import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { TodoCrudComponent } from "./components/todocrud/todocrud.component";
import { MaterialDemoComponent } from "./components/material-demo/material-demo.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    TodoCrudComponent,
    MaterialDemoComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Project_Day1";
}
