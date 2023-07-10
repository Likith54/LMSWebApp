import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMSWebApp';
  isloggedIn:any;
  constructor(private router:Router){}
  ngOnInit(): void {    
    this.isloggedIn=localStorage.getItem("isLoggedIn")?.toString();
  }  
  redirecttoLogin()
{
  this.isloggedIn="false";
  localStorage.setItem("isLoggedIn","false");
  this.router.navigate(['Login'])
}
}