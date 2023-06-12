import { Component } from '@angular/core';

interface IMsgs {
  id?: number;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  messaggi: IMsgs[] = [];

  ngOnInit() {}

  ngOnDestroy() {}
}
