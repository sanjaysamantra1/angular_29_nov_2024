import { Component } from '@angular/core';
import { AssociateCrudService } from '../../services/associate-crud.service';

@Component({
  selector: 'app-associate2',
  imports: [],
  templateUrl: './associate2.component.html',
  styleUrl: './associate2.component.css'
})
export class Associate2Component {
  constructor(private crudService: AssociateCrudService) {

  }
  addRecord(newMsg: string, id: number,sal:number) {
    const newRecord={ id, text: newMsg, sal };
    this.crudService.insertRecord(newRecord);
  }
  clearRecords(){
    this.crudService.deleteAllRecords();
  }
}
