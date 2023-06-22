import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  ProceedLogin(inputdata:any) {
    return this.http.post('http://localhost:34182/api/Authentication/login', inputdata);
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') != null?localStorage.getItem('token'):'';
  }

  Registration(inputdata:any) {
    return this.http.post('http://localhost:34182/api/Authentication/register', inputdata);

  }
}
