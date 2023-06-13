import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface IMsg {
  sender: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  ngOnInit() {}

  messaggi: IMsg[] = [
    {
      sender: 'LizZo',
      content: 'Primo messaggio',
      date: '11/06/2023 09:43',
    },
    {
      sender: 'NicoStaffo',
      content: 'Secondo messaggio',
      date: '13/06/2023 11:21',
    },
    {
      sender: 'Mercurio Giove',
      content: 'Ho il nome più figo del mondo',
      date: '13/06/2023 11:32',
    },
  ];
}
