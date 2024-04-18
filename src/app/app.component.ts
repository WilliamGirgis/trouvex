import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './static-components/login/login.component';
import { AuthService } from 'src/app/services/AuthService.service';
import { RegisterComponent } from './static-components/register/register.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';

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
  animations:[rightSlide],


})


export class AppComponent {

  isConnected:Boolean
  isAdmin:boolean
  constructor( public dialog:MatDialog,private authService:AuthService) {
this.isConnected = authService.isConnected
  }
  openLogoutDialog() {
    this.dialog.open(LogoutDialogComponent, {width:'30vw',minWidth:'max-content',height:'max-content'}).afterClosed().subscribe((data) =>{
      data ? this.logout() : null
    })
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width:'50vw',height:'max-content'})
  }

  openRegisterForm() {
    this.dialog.open(RegisterComponent, {width:"70vw",height:"fit-content"})
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
