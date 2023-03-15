import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
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
