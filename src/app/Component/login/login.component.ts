import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  public loginInvalid: boolean = false;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
onSubmit(){
  this.loginInvalid = false;
  this.router.navigate(['course']);  
  // if(this.form.valid)
  // {
  //   var Username=this.form.get('username')?.value;
  //   var Pwd=this.form.get('password')?.value;
  //   this.authService.login(Username,Pwd);    
  // }  
}
onCancel(){
  this.form.reset();
}
}
