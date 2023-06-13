import { Component } from '@angular/core';
import { IloginUser } from 'src/app/interfaces/IloginUser';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authSvc: AuthService) {
  }
  data: IloginUser = {
    email: '',
    password: ''
  }
  login() {
    this.authSvc.login(this.data).subscribe(access => {
      alert(`log in effettuato come ${access.user.name}`)
    })
  }
}
