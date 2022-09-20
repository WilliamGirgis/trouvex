import {BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes } from '@angular/router';
import {VoletComponent } from 'src/app/static-components/volet/volet.component';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {CommonModule } from '@angular/common';
import {MenubarComponent } from './static-components/menubar/menubar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FindviewComponent } from './findview/findview.component';
import {HomeviewComponent } from './homeview/homeview.component'
import {FlexLayoutModule } from '@angular/flex-layout';
import {FlexModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu'
import {HttpService} from 'src/app/services/http.service';
import { LoginComponent } from './static-components/login/login.component'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {WebReqInterceptorService} from 'src/app/services/webReqinterceptor.service'
import { AdminviewComponent } from './adminview/adminview.component';
import { AdminGuard } from 'src/app/guards/admin-guard';
import { AuthGuard } from 'src/app/guards/AuthGuard';
import { UserviewComponent } from './userview/userview.component';
import {MatTableModule} from '@angular/material/table'
import { FileUploadModule } from 'ng2-file-upload';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterComponent } from './static-components/register/register.component';
import { SecureViewComponent } from './secureView/secureView.component';
import { ContactViewComponent } from './contactView/contactView.component';
import { AboutViewComponent } from './aboutView/aboutView.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path:'find',component:FindviewComponent},
  {path:'home',component:HomeviewComponent},  
  {path:'secure',component:SecureViewComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutViewComponent},
  {path:'contact',component:ContactViewComponent},
  {path:'admin',component:AdminviewComponent,canActivate:[AdminGuard]},
  {path:'user',component:UserviewComponent,canActivate:[AuthGuard]}
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
      AboutViewComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
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
