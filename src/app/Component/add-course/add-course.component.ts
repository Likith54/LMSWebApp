import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { first } from 'rxjs';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  form!: FormGroup;
  CourseInfo!:Course;
  constructor(private fb:FormBuilder,private router:Router,private courseService:CourseService)
  {}
  ngOnInit()
  {    
    this.form = this.fb.group({
      courseName: ['', Validators.required],
      courseDuration: ['', Validators.required],
      courseTechnology: ['', Validators.required],
      courseLaunchURL: ['', Validators.required],
      courseDescription: ['', Validators.required]
    });
  }

  onSubmit()
  {    
    this.CourseInfo={ 
      courseName:this.form.get('courseName')?.value,
      courseDuration:this.form.get('courseDuration')?.value,
      courseTechnology:this.form.get('courseTechnology')?.value,
      courseLaunchURL:this.form.get('courseLaunchURL')?.value,
      courseDescription:this.form.get('courseDescription')?.value         
    }    
    this.courseService.addCourse(this.CourseInfo)
    .pipe(first())
          .subscribe({
              next: () => {                                    
                  this.router.navigate(["course"]);
              },
              error: error => {
              }
          }); ;
  }
  gotoCourse()
  {
    this.router.navigate(['course']);      
  }
}
