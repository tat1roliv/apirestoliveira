import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent {
  formSubscription: FormGroup;

  constructor(
    public router: Router,
  ){
    let controles: any = {
      name_: new FormControl('', [ Validators.required , Validators.minLength(2) ]),
      lastName_: new FormControl('', [ Validators.required, Validators.minLength(3)   ]),
      email_: new FormControl('', [ Validators.required , Validators.email  ]),
    }

    this.formSubscription = new FormGroup(controles);
  }

  handleSubscription(){
    console.log('login', this.formSubscription);
    this.router.navigate(['/students/list']);
  }
}






