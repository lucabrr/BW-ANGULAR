import { IregisterUser } from './../../../interfaces/IregisterUser';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
password!:string
confirmPassword!:string

constructor(private regSvc:RegisterService, private router:Router){}

submit(form:NgForm){

  this.regSvc.submit(form.value).subscribe(res => {console.log(res); this.router.navigate(['/login'])}
  )


}

}
