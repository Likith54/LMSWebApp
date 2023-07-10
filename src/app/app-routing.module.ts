import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { CoursesComponent } from './Component/courses/courses.component';
import { AddCourseComponent } from './Component/add-course/add-course.component';

const routes: Routes = [      
  { path: '', component: LoginComponent },  
  { path: 'Login', component: LoginComponent },
    { path: 'course', component: CoursesComponent},     
    { path: 'AddCourse', component: AddCourseComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
