import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Course } from '../Model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  getAllCourses()
  {
    return this.http.get<Course>("https://localhost:44383/api/v1/lms/courses/getall");
  } 
}
