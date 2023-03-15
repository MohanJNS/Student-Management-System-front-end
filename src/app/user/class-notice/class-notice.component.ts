import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClassService } from 'src/app/service/class.service';
import { LoginService } from 'src/app/service/login.service';
import { Notice } from 'src/app/service/notice';
import { UserNotice } from 'src/app/service/single-notice';
import { SingleNoticeService } from 'src/app/service/single-notice.service';
import { Studentclass } from 'src/app/service/Studentclass';

@Component({
  selector: 'app-class-notice',
  templateUrl: './class-notice.component.html',
  styleUrls: ['./class-notice.component.css']
})
export class ClassNoticeComponent {
  showTable: boolean = false;


  data: any;
  studentClassId!: number;
  user: any;
  constructor(private noticeService:SingleNoticeService,private dialog: MatDialog,private http:HttpClient,private login:LoginService){}

  noticeDetails:Notice[]=[];
  displayedColumns: string[] = ['noticeTitle','noticeMsg','creationDate'];
  



  isEditing: boolean = false;
  notice: any;
  dataSource: any;





  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (user:any)=>{
        console.log(user.id);
        this.user=user;
        this.noticeService.getNoticesByUserId(user.id).subscribe(
          (data: any) => {
            console.log(data);
            this.noticeDetails = data;
            
            // Sort the notices in descending order based on creation date
          // Sort the notices in descending order based on creation date
      this.noticeDetails = this.noticeDetails.sort((a: Notice, b: Notice) => {
     return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
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
      },
      (error) => {
        alert('error')
      }
    );
  }
  

  public getUserById(id: number) {
    this.noticeService.getUserById(id).subscribe(
      (data: any) => {
        console.log(data);
        this.noticeDetails = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  
  // showTableData() {
  //   this.showTable = true;
    
  // }
}