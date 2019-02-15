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
import { AppRoutingModule } from './app-routing.module';
import { RailingsComponent } from './main/features/gelander/railings.component';
import { DoorsComponent } from './main/features/zaun/doors.component';
import { FenceComponent } from './main/features/tore/fence.component';
import { ContactMainComponent } from './contact/contact-main.component';
import { SharedModule } from './shared/shared.module';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
// import { HighlightModule } from '@ngx-highlightjs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from '@angular/fire/database';
// for AngularFireAuth
import { AngularFireAuthModule } from '@angular/fire/auth';


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
    AngularFireModule.initializeApp(environment.firebase),
    Angular2ImageGalleryModule,
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
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [SharedModule],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
