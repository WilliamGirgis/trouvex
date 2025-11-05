import {BrowserModule } from '@angular/platform-browser';
import {NgModule, provideExperimentalZonelessChangeDetection } from '@angular/core';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes } from '@angular/router';
import {VoletComponent } from './static-components/volet/volet.component';
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
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {WebReqInterceptorService} from 'src/app/services/webReqinterceptor.service'
import { AdminviewComponent } from './adminview/adminview.component';
import { AdminGuard } from 'src/app/guards/admin-guard';
import { AuthGuard } from 'src/app/guards/AuthGuard';
import { UserviewComponent } from './userview/userview.component';
import {MatTableModule} from '@angular/material/table'
import { FileUploadModule } from 'ng2-file-upload';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterComponent } from './static-components/register/register.component';
// import { SecureViewComponent } from './secureView/secureView.component';
import { ContactViewComponent } from './contactView/contactView.component';
import { LogoutDialogComponent } from './static-components/dialogs/logout-dialog/logout-dialog.component';
import { ClientMapComponent } from './views/userview/client-views/client-map/client-map.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { NgLeafletUniversalModule } from "ng-leaflet-universal";
import { SaveItemDialogComponent } from './static-components/dialogs/save-item-dialog-found/save-item-dialog-found.component';
import { FileUploadModule } from 'ng2-file-upload';
import { LostObjectService } from './services/lost-object.service';
import { MatOptionModule } from '@angular/material/core';
const globalMatFormFieldOptions: MatFormFieldDefaultOptions = {
  floatLabel: 'always',
  appearance:'fill'
};

const routes: Routes = [

  {path:'home',component:HomeviewComponent},
  {path:'contact',component:ContactViewComponent},
  {path:'admin',component:AdminviewComponent,canActivate:[AdminGuard]},
  {path:'user',component:UserviewComponent,canActivate:[AuthGuard]},
  {path:'map',component:ClientMapComponent}
  ,{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path:'find',component:FindviewComponent},
  {path:'home',component:HomeviewComponent},
  // {path:'secure',component:SecureViewComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutViewComponent},
  {path:'contact',component:ContactViewComponent},
  {path:'admin',component:AdminviewComponent,canActivate:[AdminGuard]},
  {path:'user',component:UserviewComponent,canActivate:[AuthGuard]}
];

@NgModule({ declarations: [
        AppComponent,
        VoletComponent,
        MenubarComponent,
        FindviewComponent,
        HomeviewComponent,
        AdminviewComponent,
        UserviewComponent,
        LoginComponent,
        RegisterComponent,
        // SecureViewComponent,
        ContactViewComponent,
        AboutViewComponent
    ],
    exports: [],
    bootstrap: [AppComponent], imports: [BrowserModule,
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
        MatTableModule,
        MatRadioModule,
        ], providers: [HttpService, { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptorService, multi: true }, AdminGuard, AuthGuard, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}

