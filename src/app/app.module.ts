import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CheckupComponent } from './checkup.component';
import { HomeComponent } from './home.component';
import { DiseaseService } from './disease.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    CheckupComponent,
    HomeComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
        {
          path: 'checkup',
          component: CheckupComponent
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
       ]
    ),
    ReactiveFormsModule
  ],
  providers: [DiseaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
