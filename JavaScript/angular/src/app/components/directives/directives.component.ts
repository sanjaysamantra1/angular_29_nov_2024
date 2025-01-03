import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faStar,faPlane} from '@fortawesome/fontawesome-free-solid'
import { NumberonlyDirective } from '../../services/directives/numberonly.directive';
import { HighlightDirective } from '../../services/directives/highlight.directive';


@Component({
  selector: 'app-directives',
  imports: [CommonModule,FormsModule,FontAwesomeModule,NumberonlyDirective,HighlightDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
num: number =5;
cars: string[]= ['Tata','Honda','Maruti','Hundai','Toyota'];
showMessage: boolean = true;

flag: boolean=true;
myStyle1={
  "color":'red',
  "background_color": 'yellow',
  "border": "5px dotted purple"
}

myStyle2={
  "color":'green',
  "background_color": 'red',
  "border": "5px dotted brown"
}


myFunction(){
  return this.num % 2==0 ? this.myStyle1 : this.myStyle2;
}

employees=[
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];



addNewEmployeeTab: any= [
  {eImg:'https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=612x612&w=0&k=20&c=JESGRQ2xqRH9ZcJzvZBHZIZKVY8MDejBSOfxeM-i5e4=',name: 'John Doe', position: 'Manager', department: 'HR', salary: 75000 },
    { eImg:'https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=xQsoWWZXJ1ydmmCGgnHyuVYUc7BILG1FauoHcloDnG4=',name: 'Jane Smith', position: 'Software Developer', department: 'IT', salary: 85000 },
    { eImg:'https://img.freepik.com/premium-photo/businessman-computer-night-office-work-digital-programmer-cybersecurity-software-design-thinking-web-design-engineer-developer-worker-with-technology-ux-seo-database-coding_590464-87096.jpg',name: 'Alice Johnson', position: 'UI/UX Designer', department: 'Design', salary: 60000 },
    {  eImg:'https://img.freepik.com/premium-photo/computer-typing-business-man-office-working-online-information-technology-internet-global-digital-company-happy-asian-person-worker-desktop-pc-professional-market-research_590464-168998.jpg',name: 'Robert Brown', position: 'Data Analyst', department: 'Data Science', salary: 70000 },
    { eImg:'https://img.freepik.com/premium-photo/business-computer-man-working-desk-while-online-research-creative-work-male-entrepreneur-person-workplace-with-focus-internet-connection-designer-project-reading-email_590464-178171.jpg',name: 'Emily Davis', position: 'Marketing Specialist', department: 'Marketing', salary: 65000 },
];
addNewEmployee() {
  this.employees=[
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
}

faStar: any =faStar;
faPlane=faPlane;


}
