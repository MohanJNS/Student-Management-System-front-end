import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Notice } from '../service/notice';
import { SingleNoticeService } from '../service/single-notice.service';

@Component({
  selector: 'app-combined-notice',
  templateUrl: './combined-notice.component.html',
  styleUrls: ['./combined-notice.component.css']
})
export class CombinedNoticeComponent implements OnInit{
  user: any;
  noticeDetails:Notice[]=[];
  notice: any;
  
  constructor(private noticeService:SingleNoticeService,private http:HttpClient,private login:LoginService){}

  displayedColumns: string[] = ['noticeTitle','noticeMsg','creationDate','student'];


  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (user: any) => {
        console.log(user.id);
        this.user = user;
        this.noticeService.getNoticesByUserId(user.id).subscribe(
          (data: any) => {
            console.log(data);
            this.noticeDetails = data;
  
            // Sort the notices in ascending order based on creation date
            this.noticeDetails = this.noticeDetails.sort((a: Notice, b: Notice) => {
              return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime();
            });
  
            // Set the notice to the most recent one if there are any notices
            if (this.noticeDetails.length > 0) {
              // Set the notice to the most recent one
              this.notice = this.noticeDetails[this.noticeDetails.length - 1];
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
  
        // Retrieve notices by student ID
        this.noticeService.getNoticesByStudentId(user.studentId).subscribe(
          (data: any) => {
            console.log(data);
            this.noticeDetails = data;
  
            // Sort the notices in descending order based on creation date
            this.noticeDetails = this.noticeDetails.sort((a: Notice, b: Notice) => {
              return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime();
            });
  
            // Set the student notice to the most recent one if there are any notices
            if (this.noticeDetails.length > 0) {
              // Set the student notice to the most recent one
              this.notice= this.noticeDetails[this.noticeDetails.length - 1];
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      },
      (error) => {
        alert('error')
      }
    );
  }
  

  


  // public getUserById(id: number) {
  //   this.noticeService.getUserById(id).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       this.noticeDetails = data;
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }




  // public getNoticesByStudentId(studentId: number) {
  //   this.noticeService.getNoticesByStudentId(studentId).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       this.noticeDetails = data;
  //       this.noticeDetails = this.noticeDetails.sort((a: Notice, b: Notice) => {
  //         return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
  //          });
  //          if (this.noticeDetails.length > 0) {
  //           // Set the notice to the most recent one
  //          this.notice = this.noticeDetails[this.noticeDetails.length - 1];
  
  //            }
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }
  





}
