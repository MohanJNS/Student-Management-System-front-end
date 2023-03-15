import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { LoginService } from 'src/app/service/login.service';
import { Notice } from 'src/app/service/notice';
import { NoticeService } from 'src/app/service/notice.service';
import { SingleNoticeService } from 'src/app/service/single-notice.service';

@Component({
  selector: 'app-user-notice',
  templateUrl: './user-notice.component.html',
  styleUrls: ['./user-notice.component.css']
})
export class UserNoticeComponent {
  data: any;
  studentId!: number;
  user: any;
  constructor(private noticeService:SingleNoticeService,private dialog: MatDialog,private http:HttpClient,private login:LoginService){}

  noticeDetails:Notice[]=[];
  displayedColumns: string[] = ['noticeTitle','noticeMsg','creationDate'];
  



  isEditing: boolean = false;
  notice: any;
  dataSource: any;





  // ngOnInit(): void {
  //   // const studentId = 202301;
  //   this.getAllNoticesByStudentId(this.studentId);
  // }
  
  // public getAllNoticesByStudentId(studentId: number) {
  //   this.noticeService.getNotice().subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       // Filter notices by student ID
  //       this.noticeDetails = data.filter((notice: { studentId: number; }) => notice.studentId === studentId);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }
  


  
  
  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.user=user;
        const studentId = user.studentId;
        this.getNoticesByStudentId(studentId);
      },
      (error)=>{
        alert('error')
      }
    );
  }
  
  public getNoticesByStudentId(studentId: number) {
    this.noticeService.getNoticesByStudentId(studentId).subscribe(
      (data: any) => {
        console.log(data);
        this.noticeDetails = data;
        this.noticeDetails = this.noticeDetails.sort((a: Notice, b: Notice) => {
          return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
           });
           if (this.noticeDetails.length > 0) {
            // Set the notice to the most recent one
           this.notice = this.noticeDetails[this.noticeDetails.length - 1];
  
             }




      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  





  
  



}

