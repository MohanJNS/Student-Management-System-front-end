import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements  OnInit{

  user: any;
  isEditMode = false;
 

  constructor(private login:LoginService){}


  ngOnInit(): void {
// this.user=this.login.getUser();
 //console.log('User:', this.user);
this.login.getCurrentUser().subscribe(
  (user:any)=>{
    this.user=user
  },(error)=>{
    alert('error')
  }
);

  }




  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
}
