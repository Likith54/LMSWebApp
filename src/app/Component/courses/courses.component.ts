import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'courseId', 'Course Name', 'courseDuration','courseDescription','courseTechnology','courseLaunchURL']
  resultsLength = 0;
  data: string[]= []
  constructor() { }

  ngOnInit(): void {
  }

}
