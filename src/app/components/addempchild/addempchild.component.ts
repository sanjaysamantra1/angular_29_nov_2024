import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addempchild',
  imports: [FormsModule],
  templateUrl: './addempchild.component.html',
  styleUrl: './addempchild.component.css',
  outputs:['employeeAddition']
})
export class AddempchildComponent {
  name:string='';
  salary:number|null=null;

  employeeAddition=new EventEmitter<{name:string,salary:number}>();
  onAddEmployee()
  {
    if (this.name && this.salary !== null) {
      
      this.employeeAddition.emit({ name: this.name, salary: this.salary });
      this.name = '';
      this.salary = null;
    } else {
      alert("Please fill in both fields.");
    }
  }

}
