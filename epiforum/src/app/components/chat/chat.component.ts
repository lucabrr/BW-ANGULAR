import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IChatMsg } from 'src/app/interfaces/ichat-msg';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messaggi: IChatMsg[] = [];
  @Input() chat!: string;
  chatName: string = 'Generale';
  myMessage: string = '';
  chatSub!: Subscription;

  constructor(private svc: ChatService) {}

  ngOnInit() {
    this.getChannelName();
    const worker = new Worker('assets/worker.js');
    // worker.postMessage(
    //   `https://prova-f96b8-default-rtdb.europe-west1.firebasedatabase.app/${this.chat}.json`
    // );
    worker.onmessage = (event) => {
      const data = event.data;

      if (data.error) {
        console.error(data.error);
      } else {
        this.messaggi = data;
      }
    };
  }

  ngOnDestroy() {
    if (this.chatSub) this.chatSub.unsubscribe();
  }

  getChannelName(): void {
    switch (this.chat) {
      case 'chat':
        this.chatName = 'Generale';
        break;
      case 'chat-2':
        this.chatName = 'Teaching Assistant';
        break;
      case 'chat-3':
        this.chatName = 'this.Gusto';
        break;
      case 'chat-4':
        this.chatName = 'this.Prezzo';
        break;
      case 'chat-5':
        this.chatName = 'Meme';
        break;
    }
  }

  sendMessage(): void {
    let obj: IChatMsg = {
      sender: 'LizZo',
      content: this.myMessage,
      date: new Date(),
    };
    let newArr: IChatMsg[] = this.messaggi;
    newArr.push(obj);
    this.chatSub = this.svc
      .uploadMessage(this.chat, newArr)
      .subscribe((res) => {
        this.messaggi = res;
        this.myMessage = '';
      });
  }
}
