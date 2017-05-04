import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FeaturesComponent } from './main/features/features.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { AppMaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RailingsComponent } from './main/features/railings/railings.component';
import {GoTopButtonModule} from 'ng2-go-top-button';

@NgModule({
  declarations: [
    AboutComponent,
    RailingsComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    FeaturesComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
  ],
  imports: [
    GoTopButtonModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
