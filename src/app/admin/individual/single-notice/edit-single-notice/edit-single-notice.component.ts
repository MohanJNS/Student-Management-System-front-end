import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditNoticeDialogComponent } from 'src/app/admin/edit-notice-dialog/edit-notice-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Notice } from 'src/app/service/notice';
import { UserNotice } from 'src/app/service/single-notice';
import { SingleNoticeService } from 'src/app/service/single-notice.service';
import { EditSingleNoticeDialogComponent } from '../edit-single-notice-dialog/edit-single-notice-dialog.component';
import { SingleNoticeComponent } from '../single-notice.component';

@Component({
  selector: 'app-edit-single-notice',
  templateUrl: './edit-single-notice.component.html',
  styleUrls: ['./edit-single-notice.component.css']
})
export class EditSingleNoticeComponent implements OnInit {




  constructor(private service:SingleNoticeService,private dialog: MatDialog,private http:HttpClient,private snackBar: MatSnackBar){}
  noticeDetails:UserNotice[]=[];
  displayedColumns: string[] = ['id','noticeTitle','noticeMsg','creationDate','updateButton','deleteButton'];


  isEditing: boolean = false;
  notice: any;
  dataSource: any;



  ngOnInit(): void {
    this.getallNotices();
    
  }



  public getallNotices() {
    this.service.getNotice().subscribe(
      (data: any) => {
        console.log(data);
        this.noticeDetails = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }



  public updateNotice(notice: UserNotice) {
    this.isEditing = true;
    const dialogRef = this.dialog.open(EditSingleNoticeDialogComponent, {
      data: notice
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       
        this.service.updateNotice(result.id, result).subscribe(
          (data: any) => {
            console.log(data);
            this.getallNotices();// Refresh the data

            
            this.snackBar.open('Notice updated successfully', 'Close', { duration: 3000 });
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      }
    });
  }


  public deleteNotice(notice: UserNotice) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure you want to delete this record?"
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete the student record
        this.service.deleteNotice(notice.id).subscribe(
          (data) => {
            console.log(data);
            this.snackBar.open('Record deleted successfully', '', {
              duration: 2000
            });
            window.location.reload();
          }, (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      }
    });
  }
















}
