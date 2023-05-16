import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MainModule { }
