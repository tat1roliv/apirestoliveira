import { Injectable } from '@angular/core';
import { SessionService } from 'src/app/core/services/session.service';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private session: SessionService
  ) { }



  login(user: User){
    //localStorage.setItem('sesionActiva', JSON.stringify(usuario));

    let session: Session = {
      sessionActive: true,
      userActive: user
    }

    this.session.createSession(session)
  }


}
