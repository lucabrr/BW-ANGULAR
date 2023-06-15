import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedChannel: string = 'chat';
  refreshing: boolean = false;

  switchChannel(chat: string) {
    this.refreshing = true;
    this.selectedChannel = chat;
    setTimeout(() => {
      this.refreshing = false;
    }, 500);
  }
}
