import { AfterViewInit, Component, EventEmitter, OnInit, signal, Signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './static-components/dialogs/login/login.component';
import { AuthService } from '../app/services/AuthService.service';
import { RegisterComponent } from './static-components/dialogs/register/register.component';
import { LogoutDialogComponent } from './static-components/dialogs/logout-dialog/logout-dialog.component';
import { WelcomeDialogComponent } from './static-components/dialogs/welcome-dialog/welcome-dialog.component';
import { SaveItemDialogComponent } from './static-components/dialogs/save-item-dialog-found/save-item-dialog-found.component';
import { LostObject } from './shared/lostObjet';
import { LostObjectService } from './services/lost-object.service';
import { SaveItemLostDialogComponent } from './static-components/dialogs/save-item-lost-dialog/save-item-lost-dialog.component';
import { ClientMapComponent } from './views/userview/client-views/client-map/client-map.component';
import { UserviewComponent } from './views/userview/client-views/client-info/userview.component';
import { HomeviewComponent } from './views/userview/client-views/homeview/homeview.component';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Marker } from 'ng-leaflet-universal';


class TitleMapping {
  title:string = ''


}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})


export class AppComponent implements AfterViewInit,OnInit {
  selectedLang:string = 'FR'
  isVoletUp:boolean = false
  closeVoletOutput() {
this.isVoletUp = false
  }


  titleMapping = new Map()
  currentRoute:string = ''
test() {
console.log("Done")
}
langs:string[] = ['EN','FR','DE','LU','TR','RU']
menuLangSet:boolean = false
mapSet:boolean = false
  isAdmin:boolean | undefined
  title = 'portfolio';
  constructor(public lostObjectService:LostObjectService, public dialog:MatDialog,public authService:AuthService,public router:Router) {
this.titleMapping.set('user','Mes informations')
this.titleMapping.set('map','Carte')
this.titleMapping.set('home','Accueil')
this.titleMapping.set('contact','Contactez-nous')


}
markerClickEvents:EventEmitter<L.LeafletMouseEvent> = new EventEmitter()
location = new FormControl('');
filteredOptions?:Observable<string[]>
  ngOnInit(): void {

    this.filteredOptions  = this.location.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }
searchOpened = signal(true)
options: string[] = ['Option 1','Option 2','Option 3']
private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
inputSearch:string = ''
openTools:boolean = true
selectedMarker:Marker = {id:'Porte feuille',location:{latitude:39,longitude:43},card:{},cardActivated:true}
  displayButton:boolean = false
  getRoute(event:Event) {
   event instanceof ClientMapComponent ? this.displayButton = true : this.displayButton = false
   this.isVoletUp = false

    this.currentRoute = this.router.url.split(/\//g)[1]
console.log(this.currentRoute)
  }
  ngAfterViewInit(): void {
this.searchOpened()

  }

  openObjetLostDialog() {
    this.dialog.open(SaveItemLostDialogComponent, {minWidth:"max-content",height:'max-content',minHeight:'max-content',data:{},exitAnimationDuration:200,enterAnimationDuration:200})

  }
  openObjetFoundDialog() {
    this.dialog.open(SaveItemDialogComponent, {minWidth:"max-content",height:'max-content',data:{},exitAnimationDuration:200,enterAnimationDuration:200})

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

}
