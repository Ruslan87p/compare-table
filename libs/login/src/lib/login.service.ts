import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  fakeUsername = "user";
  fakePassword = "user";

  constructor(private http:HttpClient) { }

  login(username:string,password:string):Observable<any>{
    // Mock a successful call to an API server.
    if (username == this.fakeUsername && password == this.fakePassword) {
      localStorage.setItem("token", "my-super-secret-token-from-server");

      // TODO real call to an API
      // this.http.post('http://localhost:3001/users',{username,password, id: 34})

      return of(new HttpResponse({ status: 200, body: {username,password, id: 34} }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem("token") != null) {
      return true;
    }
    return false;
  }



}
