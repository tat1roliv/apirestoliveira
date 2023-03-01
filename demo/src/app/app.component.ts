import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './models/student';
//import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
   // public studentService: StudentService,
    public router: Router,
     ){ }

  redigirInicio(){
    this.router.navigate(['home'] )
  }

}
