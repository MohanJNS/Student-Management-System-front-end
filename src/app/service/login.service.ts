import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //current user which is logged in
public getCurrentUser(){
  return this.http.get(`${baseUrl}/current-user`);
}

//generate token


public generateToken(loginData:any){
return this.http.post(`${baseUrl}/generate-token`,loginData);

}

//Login user : set token in localstorage
public loginUser(token: string){
  localStorage.setItem("token",token);
 
  return true;
}

//islogin   user is login or not
isLoggedIn(): boolean {
  const tokenStr = localStorage.getItem('token');
  if (tokenStr === undefined || tokenStr === '' || tokenStr === null) {
    return false;
  } else {
    return true;
  }
}


//logout: remove token from local storage

public logout()
{
localStorage.removeItem('token');
localStorage.removeItem('user');
return true;
}

//get token

public getToken(){
return localStorage.getItem('token');
}

//set user details

public setUser(user: any){
  localStorage.setItem('user',JSON.stringify(user));
}

 public getUser() {
  const userStr = localStorage.getItem("user");
  if (userStr != null) {
    return JSON.parse(userStr);
  } else {
    this.logout();
    return null;
  }
}


















//get user role
getUserRole(): string {
  const user = this.getUser();
  return user.authorities[0].authority;
}


}
