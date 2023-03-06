import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { SessionService } from '../services/session.service';


@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private session: SessionService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.session.getSession().pipe(
        map( (session: Session) => {
            if(session.sessionActive){
              return true;
            }else{
              this.router.navigate(['auth/login']);
              return false;
            }
          })
        )
      }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.session.getSession().pipe(
        map( (session: Session) => {
            if(session.sessionActive){
              return true;
            }else{
              this.router.navigate(['auth/login']);
              return false;
            }
          })
        )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true
      return this.session.getSession().pipe(
        map( (session: Session) => {
            if(session.sessionActive){
              return true;
            }else{
              this.router.navigate(['auth/login']);
              return false;
            }
          })
        )
  }


}
