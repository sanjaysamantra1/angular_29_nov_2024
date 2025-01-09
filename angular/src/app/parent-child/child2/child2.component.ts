
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  imports: [FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  @Input() employees: any[] = [];
  @Output() viewEmployee = new EventEmitter<any>();
  @Output() deleteEmployee = new EventEmitter<number>();

  onViewEmployee(employee: any) {
    this.viewEmployee.emit(employee);
  }

  onDeleteEmployee(id: number) {
    this.deleteEmployee.emit(id);
  }

  trackById(index: number, employee: any) {
    return employee.id;
  }



}
