import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './core/services/session.service';
import { Session } from './models/session';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  session$!: Observable<Session>

  constructor(
    public session: SessionService,
    public router: Router,
     ){ }

  ngOnInit(): void {
      this.session$ = this.session.getSession()
  }

  redigirInicio(){
    this.router.navigate(['home'] )
  }

  logout(){
    let sessionLogout: Session = {
      sessionActive: false
    }
    this.session.logout(sessionLogout)
    this.router.navigate(['auth/login'])
  }

}
