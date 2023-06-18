import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  login(username:string,password:string)
  {
    return this.http.post<any>(`https://localhost:44383/api/v1/lms/user/login`, { username, password });
  }
}
