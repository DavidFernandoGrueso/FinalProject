import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FooterhoComponent } from './footerho/footerho.component';
import { AppComponent} from 'src/app/app.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderhomeComponent,
    SliderComponent,
    LoginComponent,
    MainComponent,
    FooterhoComponent,
    AppComponent
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HomeModule { }
