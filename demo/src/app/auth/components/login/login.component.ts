import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    public router: Router,
  ){
    let controles: any = {
      name_: new FormControl('', [ Validators.required , Validators.minLength(2) ]),
      email_: new FormControl('', [ Validators.required , Validators.email  ]),
    }

    this.formLogin = new FormGroup(controles);
  }


}
