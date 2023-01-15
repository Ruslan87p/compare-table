import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '@code-compare/login';

@Injectable({
  providedIn: 'root'
})
export class AutenticationGuardGuard implements CanActivate {

  constructor(
    private loginSvc: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticate();
  }

  private authenticate(): boolean {
    if (!this.loginSvc.isUserLoggedIn()) {
      this.router.navigateByUrl("/login");
      return false;
    } else {
      return true;
    }
  }

}
