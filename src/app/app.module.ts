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
import {HomeviewComponent } from './views/userview/client-views/homeview/homeview.component'

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpService} from './services/http.service';
import { LoginComponent } from './static-components/dialogs/login/login.component'
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {WebReqInterceptorService} from './services/webReqinterceptor.service'
import { AdminviewComponent } from './views/userview/adminview/adminview.component';
import { AdminGuard } from './guards/admin-guard';
import { AuthGuard } from './guards/AuthGuard';
import { UserviewComponent } from './views/userview/client-views/client-info/userview.component';
import { RegisterComponent } from './static-components/dialogs/register/register.component';
import { WelcomeDialogComponent } from './static-components/dialogs/welcome-dialog/welcome-dialog.component';
import { QrCodeDialogComponent } from './static-components/dialogs/qr-code-dialog/qr-code-dialog.component';
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
];

@NgModule({ declarations: [
        AppComponent,
        VoletComponent,
        HomeviewComponent,
        AdminviewComponent,
        LoginComponent,
        RegisterComponent,
        ContactViewComponent,
        LogoutDialogComponent,
        ClientMapComponent,
        WelcomeDialogComponent,
        QrCodeDialogComponent,

    ],
    exports: [],
    bootstrap: [AppComponent], imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { urlUpdateStrategy: 'deferred' }),
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
        MatOptionModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        SaveItemDialogComponent,
        FileUploadModule,
        NgLeafletUniversalModule], providers: [HttpService, { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptorService, multi: true }, AdminGuard, AuthGuard, {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: globalMatFormFieldOptions
        }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}

