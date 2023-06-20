import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Course } from '../Model/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  getAllCourses()
  {
    return this.http.get<Course>(`${environment.apiUrl}courses/getall`);
  } 
  addCourse(courseDetails:Course)
  {    
    return this.http.post<Course>(`${environment.apiUrl}courses/add`,courseDetails);
  }
}
