import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { MainComponent } from './main/main.component';
import { FeaturesComponent } from './main/features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { AppMaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RailingsComponent } from './main/features/gelander/railings.component';
import { DoorsComponent } from './main/features/zaun/doors.component';
import { FenceComponent } from './main/features/tore/fence.component';
import { ContactMainComponent } from './contact/contact-main.component';
import { SharedModule } from './shared/shared.module';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery/src/app/angular2imagegallery.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { NgxGalleryModule } from 'ngx-gallery';

import * as firebase from 'firebase';
@NgModule({
  declarations: [
    RailingsComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    ContactMainComponent,
    DoorsComponent,
    FenceComponent,
    // GalleryComponent
  ],
  imports: [
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyA5_j1wX-uyz1MJCa5MnAOO08F1EVrca3A',
      authDomain: 'dorex-prod.firebaseapp.com',
      databaseURL: 'https://dorex-prod.firebaseio.com',
      projectId: 'dorex-prod',
      storageBucket: 'dorex-prod.appspot.com',
      messagingSenderId: '342130392500'
    }),
    Angular2ImageGalleryModule,
    NgxGalleryModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5_j1wX-uyz1MJCa5MnAOO08F1EVrca3A'
    })
  ],
  exports: [SharedModule],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
