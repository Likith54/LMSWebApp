import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'courseId', 'courseName', 'courseDuration','courseDescription','courseTechnology','courseLaunchURL']
  resultsLength = 0;
  data: Course[]= []
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.loadData();
  }
loadData()
{
  this.courseService.getAllCourses().subscribe(data=>this.data);
}
}
