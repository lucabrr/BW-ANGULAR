import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  messaggi: [] = [];

  ngOnInit() {
    const worker = new Worker('assets/worker.js');
    worker.postMessage(
      'https://6486d413beba6297278f3df3.mockapi.io/api/messaggi'
    );
    worker.onmessage = (event) => {
      const data = event.data;

      if (data.error) {
        console.error(data.error);
      } else {
        console.log(data);
      }
    };
  }

  ngOnDestroy() {}
}
