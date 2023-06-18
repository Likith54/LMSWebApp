import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/Service/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  public loginInvalid: boolean = false;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
onSubmit(){
this.submitted=true;
        // stop here if form is invalid
        if (this.form.invalid) {
          return;
      }

      this.error = '';
      this.loading = true;
      this.authService.login(this.form.get('username')?.value, this.form.get('password')?.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // get return url from route parameters or default to '/'                  
                  this.router.navigate(["course"]);
              },
              error: error => {
                  this.error = error;
                  this.loading = false;
              }
          }); 
}
onCancel(){
  this.form.reset();
}
}
