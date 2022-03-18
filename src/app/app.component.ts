import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './static-components/login/login.component';
import { AuthService } from 'src/app/services/AuthService.service';
export const rightSlide =
  trigger('routeAnimations', [
    state('main', style({
      height: '100vh',
      opacity: 0.8,
      backgroundColor: 'blue',

    })), 
    state('box', style({
      height: '100vh',
      opacity: 0.8,
      backgroundColor: 'yellow',

    })),

    transition('main <=> box', [

      animate(500)
  ]),
  
  ]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[rightSlide]
})


export class AppComponent {

  constructor( public dialog:MatDialog,private authService:AuthService) {

  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width:'500px',height:'450px'})
  }
  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  logout() {
    this.authService.logout()
    window.location.reload()
  }
  title = 'portfolio';
}
