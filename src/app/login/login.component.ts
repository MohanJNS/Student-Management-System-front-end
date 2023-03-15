import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginData={
    username:'',
    password:'',
  };
 


constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){

}
ngOnInit(): void {

}


formSubmit(){
  console.log("login form submited");


  if(
    this.loginData.username.trim()=='' || 
    this.loginData.username==null
    )
  {
  this.snack.open('Username is required !!','',{
  duration:3000,
  });
return;
  }

  if(
    this.loginData.password.trim()=='' || 
    this.loginData.password==null
    )
  {
  this.snack.open('Password is required !!','',{
  duration:3000,
  });
return;
  }


    // Request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        // Login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);


          
         
          
          if(this.login.getUserRole()=='ADMIN'){
            //admin dashboard
            // window.location.href='/admin'
            this.router.navigate(['admin'])
            this.login.loginStatusSubject.next(true)
            
          // }else if(this.login.getUserRole()=='NORMAL'){
          //   //normal user dashboard
          //   // window.location.href='/user-dashboard'
          //   this.router.navigate(['user-dashboard'])
          //   this.login.loginStatusSubject.next(true)

          }else if(this.login.getUserRole()=='STUDENT'){
            //normal user dashboard
            // window.location.href='/user-dashboard'
            this.router.navigate(['user-dashboard'])
            this.login.loginStatusSubject.next(true)
            
          }else{
            this.login.logout();
          }
            
         
        });
      },
      (error: any) => {
        console.log('Error!');
        console.log(error);
        this.snack.open("Invalid Details !!  Try again")
      }
    );
  }
}