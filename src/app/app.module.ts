import {BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes } from '@angular/router';
import {VoletComponent } from 'src/app/static-components/volet/volet.component';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatTableModule } from '@angular/material/table';
import {MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule } from '@angular/material/menu';
import {MatListModule } from '@angular/material/list';
import {MatInputModule } from '@angular/material/input';

import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {CommonModule } from '@angular/common';
import {MenubarComponent } from './static-components/menubar/menubar.component';
import {FindviewComponent } from './findview/findview.component';
import {HomeviewComponent } from './views/userview/client-views/homeview/homeview.component'

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpService} from 'src/app/services/http.service';
import { LoginComponent } from './static-components/login/login.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {WebReqInterceptorService} from 'src/app/services/webReqinterceptor.service'
import { AdminviewComponent } from './views/userview/adminview/adminview.component';
import { AdminGuard } from 'src/app/guards/admin-guard';
import { AuthGuard } from 'src/app/guards/AuthGuard';
import { UserviewComponent } from './views/userview/userview.component';
import { RegisterComponent } from './static-components/register/register.component';
import { SecureViewComponent } from './views/userview/client-views/secureview/secureview.component';
import { ContactViewComponent } from './contactView/contactView.component';
import { AboutViewComponent } from './aboutView/aboutView.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { ClientMapComponent } from './views/userview/client-views/client-map/client-map.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
const globalMatFormFieldOptions: MatFormFieldDefaultOptions = {
  floatLabel: 'always',
  appearance:'fill'
};

const routes: Routes = [

  {path:'find',component:FindviewComponent},
  {path:'home',component:HomeviewComponent},
  {path:'secure',component:SecureViewComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutViewComponent},
  {path:'contact',component:ContactViewComponent},
  {path:'admin',component:AdminviewComponent,canActivate:[AdminGuard]},
  {path:'user',component:UserviewComponent,canActivate:[AuthGuard]},
  {path:'map',component:ClientMapComponent}
  ,{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    VoletComponent,
    MenubarComponent,
    FindviewComponent,
    HomeviewComponent,
      AdminviewComponent,
      UserviewComponent,
      LoginComponent,
      RegisterComponent,
      SecureViewComponent,
      ContactViewComponent,
      AboutViewComponent,
      LogoutDialogComponent,
      ClientMapComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {}),
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    HttpClientModule  ],
  exports :[],
  providers: [HttpService,{provide:HTTP_INTERCEPTORS,useClass:WebReqInterceptorService,multi:true},AdminGuard,AuthGuard, {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: globalMatFormFieldOptions
  }
],
  bootstrap: [AppComponent]


})
export class AppModule {}
