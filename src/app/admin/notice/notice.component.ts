import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Notice } from 'src/app/service/notice';
import { NoticeService } from 'src/app/service/notice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
 
 
 
 public notice=
 { title:'',
  message: '',
  date: '',

 }
  constructor(private service:NoticeService, private router:Router,private snack:MatSnackBar) { }

  



  onSubmit(){
    console.log(this.notice);
    if(this.notice.title == '' || this.notice.title  == null){
      // alert('User is required !!');
      this.snack.open('User name is required','',{
    duration:3000,
  verticalPosition:'top',
   horizontalPosition:'right'
      });
      
      return;
    }


    this.service.createNotice(this.notice).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success','user is Registered','success');
        // clear form fields
        this.notice.title = '';
        this.notice.message= '';
        this. notice.date = '';
      },
      (error: any) => {
        console.error();
        this.snack.open('Something went wrong', '', {
          duration: 3000
        });
      }
    );
    
    }






}
