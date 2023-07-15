import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user?: Observable<User | null>;
  constructor(private http:HttpClient,private router:Router) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
   }
  public get userValue() {
    return this.userSubject.value;
  }

login(username: string, password: string) {     
    return this.http.post<any>(`${environment.apiUrl}user/login?username=`+username+`&password=`+password,'')
        .pipe(map(user => {            
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            localStorage.setItem("LoggedinUser",user["name"]);            
            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("LoggedinUser");
    this.userSubject.next(null);
    this.router.navigate(['Login']);    
}
}
