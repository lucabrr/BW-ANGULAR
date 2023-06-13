import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  myUrl: string = 'http://localhost:3000/login';

  private authSubject = new BehaviorSubject<null | >(null);

  constructor() { }
}
