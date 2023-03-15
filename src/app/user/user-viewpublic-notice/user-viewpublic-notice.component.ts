import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Notice } from 'src/app/service/notice';
import { NoticeService } from 'src/app/service/notice.service';

@Component({
  selector: 'app-user-viewpublic-notice',
  templateUrl: './user-viewpublic-notice.component.html',
  styleUrls: ['./user-viewpublic-notice.component.css']
})
export class UserViewpublicNoticeComponent implements OnInit {

  constructor(private noticeService:NoticeService,private dialog: MatDialog,private http:HttpClient){}

  noticeDetails:Notice[]=[];
  displayedColumns: string[] = ['title','message','date'];


  isEditing: boolean = false;
  notice: any;
  dataSource: any;





  ngOnInit(): void {
    this.getallNotices();
  }


  public getallNotices() {
    this.noticeService.getNotice().subscribe(
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
     
      (error: HttpErrorResponse) => {
        console.log(error);
      }
  });
  }




}
