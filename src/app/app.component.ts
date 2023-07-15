import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMSWebApp';
  isloggedIn:any;
  Username:any;
  constructor(private router:Router,private auth:AuthService){}
  ngOnInit(): void {    
    this.isloggedIn=localStorage.getItem("isLoggedIn")?.toString();
    this.Username=localStorage.getItem("LoggedinUser")?.toString();
  }  
  redirecttoLogin()
{
  this.auth.logout();  
}
}