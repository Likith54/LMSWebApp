import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'courseId', 'Course Name', 'Course Duration','Course Description','Course Technology','Course Launch URL','actions']
  resultsLength = 0;
  data:any;
  dataset:any;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private courseService:CourseService,private router:Router) {     
  }

  ngOnInit(): void {    
    this.loadData();
  }

// To load Grid Details
loadData()
{
  this.courseService.getAllCourses()
  .subscribe((response:Course[]|any)=>
  {
    this.dataset=response;
    this.data=new MatTableDataSource<Course>(response);   
    this.data.sort=this.sort; 
  });
}

// For filtering values in Table
applyFilter(filterValue: any) {
  filterValue = filterValue.target.value.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.data.filter = filterValue;
}

// To Redirect to Add course component 
redirecttoAddCourse()
{
  this.router.navigate(['AddCourse'])
}

// To Delete Course item based on Course ID
onDelete(Id:string){
if(confirm("Are you sure want to delete?"))
{
  this.courseService.deleteCourse(Id).subscribe();
  alert("Successfully Deleted !!!");  
}

}
}
