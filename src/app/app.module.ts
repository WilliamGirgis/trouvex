import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { VoletComponent } from 'src/app/static-components/volet/volet.component';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './static-components/menubar/menubar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FindviewComponent } from './findview/findview.component';
import { HomeviewComponent } from './homeview/homeview.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SecureviewComponent } from './secureview/secureview.component';
import {MatIconModule} from '@angular/material/icon'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path:'find',component:FindviewComponent},
  {path:'home',component:HomeviewComponent},
  {path:'secure',component:SecureviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VoletComponent,
    MenubarComponent,
    FindviewComponent,
    HomeviewComponent,
    SecureviewComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
