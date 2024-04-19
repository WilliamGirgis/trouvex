import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../static-components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(public dialog:MatDialog,private router:Router){}
  openLoginForm() {
    this.dialog.open(LoginComponent, {width:'50vw',height:'max-content'})
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!!localStorage.getItem('user-id')) {
      return true
    } else {
      this.router.navigate(['/home']);
      this.openLoginForm()
      return false
    }
  }

}
