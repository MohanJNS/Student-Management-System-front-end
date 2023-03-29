import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  
  @Input() showNavbar: boolean = true;

  public showMenu = false;

 
  isLoggedIn=false;
  user: { username: string } | null = null;

  getUser: any;
  


  constructor(public login:LoginService ){}


 

  ngOnInit(): void {

this.isLoggedIn=this.login.isLoggedIn();
this.user=this.login.getUser();
this.login.loginStatusSubject.asObservable().subscribe((data)=>{
this.isLoggedIn=this.login.isLoggedIn();
this.user=this.login.getUser();
});
      
  }


public logout(){
  this.login.logout();
  // this.login.loginStatusSubject.next(false);
  window.location.reload();

}



public toggleMenu() {
  this.showMenu = !this.showMenu;
}


}


