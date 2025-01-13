import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './static-components/dialogs/login/login.component';
import { AuthService } from '../app/services/AuthService.service';
import { RegisterComponent } from './static-components/dialogs/register/register.component';
import { LogoutDialogComponent } from './static-components/dialogs/logout-dialog/logout-dialog.component';
import { WelcomeDialogComponent } from './static-components/dialogs/welcome-dialog/welcome-dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements AfterViewInit {
  selectedLang:string = 'FR'
  isVoletUp:boolean = true
  closeVoletOutput() {
this.isVoletUp = !this.isVoletUp
  }
langs:string[] = ['EN','FR','DE','LU','TR','RU']
menuLangSet:boolean = false
mapSet:boolean = false
  isConnected:Boolean
  isAdmin:boolean | undefined
  constructor( public dialog:MatDialog,private authService:AuthService,private router:Router) {
this.isConnected = authService.isConnected

  }
  ngAfterViewInit(): void {
    console.log(this.router)
  }

  openWelcomeDialog(id:string) {
    this.dialog.open(WelcomeDialogComponent, {minWidth:"max-content",height:'max-content',data:{userpseudo:id},exitAnimationDuration:500,enterAnimationDuration:800})
  }
  openLogoutDialog() {
    this.dialog.open(LogoutDialogComponent, {width:'33vw',minWidth:'max-content',height:'max-content'}).afterClosed().subscribe((data) =>{
      data ? this.logout() : null
    })
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width:'50vw',height:'max-content'}).afterClosed().subscribe((data) =>{
      console.log(data)
      data ? this.openWelcomeDialog(data) : null
    })
  }

  openRegisterForm() {
    this.dialog.open(RegisterComponent, {width:"70vw",height:"80vh",minHeight:'max-content'})
  }
  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  logout() {
    this.authService.logout()
    window.location.reload()
  }



  title = 'portfolio';
}
