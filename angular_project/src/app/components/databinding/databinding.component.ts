import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Sachin Tendulkar';
  img_url: string = 'https://images-cricketcom.imgix.net/sachin-tendulkar-1693132548682?fit=crop&crop=face&auto=format&ixlib=react-9.8.0&h=250&w=180'
  flag: boolean = false;
}