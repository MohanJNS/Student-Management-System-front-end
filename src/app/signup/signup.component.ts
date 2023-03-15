import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService:UserService,private snack:MatSnackBar){}
  isStudent: boolean = false;
  userType: string = '';
  classes: any;

  classId!: number;


  public user = {
  
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    studentId:'',
    studentClassId: '',
    className: '',
    section: '',
  
  };
  
  
  
  ngOnInit(): void {
      
  }
  
  formSubmit(){


    // if (this.userType === 'student') {
    //   this.isStudent = true;
    //   console.log('isStudent set to true');
    // }

    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      // alert('User is required !!');
      this.snack.open('User name is required','',{
duration:3000,
verticalPosition:'top',
horizontalPosition:'right'
      });
      
      return;
    }




    //add user:userService

    this.userService.addUser(this.user).subscribe(
      (data) =>{
        console.log(data);
        // alert('success');
        Swal.fire('Success','Student is Registered Successfully','success');
    
    
        this.user.username = '';
        this.user.password= '';
        this. user.firstName = '';
        this. user.lastName = '';
        this.user.email= '';
        this.user. phone= '';
        this.user.studentId='';
     
    
      },
      (error) =>{
        console.log(error);
        const errorMessage = error.error.message;
        console.log(errorMessage);
        if(errorMessage === "User already present !!"){
          this.snack.open('Username is already taken','',{
            duration:3000
          });
        }else if(errorMessage === "Student ID already registered!"){
          this.snack.open('Student ID is already taken','',{
            duration:3000
          });
        }else{
          this.snack.open(errorMessage || 'Something went wrong','',{
            duration:3000
          });
        }
      }
      
      
    );
    
    

  }



  refresh(): void {
    window.location.reload();
  }


  onUserTypeChange() {
    this.isStudent = this.userType === 'student';
  }
  

 changeClass(event: any){
    this.classId = event.target.value;
    console.log(this.classId);
  }


  
  }
  