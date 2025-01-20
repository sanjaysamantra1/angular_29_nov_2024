import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message1',
  imports: [],
  templateUrl: './message1.component.html',
  styleUrl: './message1.component.css'
})
export class Message1Component {
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