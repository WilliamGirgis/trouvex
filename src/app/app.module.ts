import {BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes } from '@angular/router';
import {VoletComponent } from 'src/app/static-components/volet/volet.component';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button'
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input'
import {CommonModule } from '@angular/common';
import {MenubarComponent } from './static-components/menubar/menubar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FindviewComponent } from './findview/findview.component';
import {HomeviewComponent } from './views/userview/client-views/homeview/homeview.component'
import {FlexLayoutModule } from '@angular/flex-layout';
import {FlexModule } from '@angular/flex-layout';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list'
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu'
import {HttpService} from 'src/app/services/http.service';
import { LoginComponent } from './static-components/login/login.component'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog'
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field'
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {WebReqInterceptorService} from 'src/app/services/webReqinterceptor.service'
import { AdminviewComponent } from './views/userview/adminview/adminview.component';
import { AdminGuard } from 'src/app/guards/admin-guard';
import { AuthGuard } from 'src/app/guards/AuthGuard';
import { UserviewComponent } from './views/userview/userview.component';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table'
import { FileUploadModule } from 'ng2-file-upload';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { RegisterComponent } from './static-components/register/register.component';
import { SecureViewComponent } from './views/userview/client-views/secureview/secureview.component';
import { ContactViewComponent } from './contactView/contactView.component';
import { AboutViewComponent } from './aboutView/aboutView.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { ClientMapComponent } from './views/userview/client-views/client-map/client-map.component';

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
      ClientMapComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {}),
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    FlexModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule,
    MatRadioModule,
    FileUploadModule
  ],
  exports :[],
  providers: [HttpService,{provide:HTTP_INTERCEPTORS,useClass:WebReqInterceptorService,multi:true},AdminGuard,AuthGuard],
  bootstrap: [AppComponent]


})
export class AppModule {}
