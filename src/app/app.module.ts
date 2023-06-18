import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { CoursesComponent } from './Component/courses/courses.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'

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
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule            
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
