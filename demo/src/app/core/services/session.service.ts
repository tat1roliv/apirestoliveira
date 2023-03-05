import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from 'src/app/models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session$!: BehaviorSubject<Session>;

  constructor() {
    let session: Session = {
      sessionActive: false,
    }
    this.session$ = new BehaviorSubject<Session>(session);
  }

  createSession(session: Session) {
    this.session$.next(session);
  }

  getSession(): Observable<Session>{
    return this.session$.asObservable();
  }

  logout(session: Session){
    this.session$.next(session)
  }

}
