import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}
  temp: string;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getAdmin(); 
  }

  async getAdmin(): Promise<boolean> {
    let querParam = new HttpParams().set('id', 'Admin');
    let data = await this.http
      .get('http://localhost:4200/user/users/_id', {
        params: querParam,
        responseType: 'text',
      })
      .toPromise();
    if (localStorage.getItem('user-id') == data ) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
