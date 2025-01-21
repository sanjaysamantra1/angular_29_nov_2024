import { Component } from '@angular/core';
import { AssociateCrudService } from '../../services/associate-crud.service';

@Component({
  selector: 'app-associate',
  imports: [],
  templateUrl: './associate.component.html',
  styleUrl: './associate.component.css'
})
export class AssociateComponent {
  messages: any = [];
  constructor(private crudService: AssociateCrudService) {
  }
  ngOnInit() {
    this.crudService.getRecord().subscribe((records: any[]) => {
      this.messages = records;  
    });
      
  }
  delRecord(id:any){
     this.crudService.deleteRecord(id);
  }
}
