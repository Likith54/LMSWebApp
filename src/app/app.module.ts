import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { CoursesComponent } from './Component/courses/courses.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,            
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
