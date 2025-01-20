import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message2',
  imports: [],
  templateUrl: './message2.component.html',
  styleUrl: './message2.component.css'
})
export class Message2Component {
  messages: any = [];
  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    this.messageService.getMessage().subscribe((msg: any) => {
      if (msg) {
        this.messages.push(msg);
      } else {
        this.messages = [];
      }
    })
  }
}