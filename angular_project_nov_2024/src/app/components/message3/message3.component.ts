import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message3',
  imports: [],
  templateUrl: './message3.component.html',
  styleUrl: './message3.component.css'
})
export class Message3Component {
  constructor(private messageService: MessageService) {

  }
  addMessage(newMsg: string) {
    this.messageService.sendMessage(newMsg);
  }
  clearMessage(){
    this.messageService.clearMessages();
  }
} 