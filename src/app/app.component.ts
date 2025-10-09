import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './static-components/login/login.component';
import { AuthService } from 'src/app/services/AuthService.service';
import { RegisterComponent } from './static-components/register/register.component';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [],
    standalone: false
})


export class AppComponent {

  isConnected:Boolean

  constructor( public dialog:MatDialog,private authService:AuthService) {
this.isConnected = authService.isConnected
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width:'50vw',height:'70vh'})
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
