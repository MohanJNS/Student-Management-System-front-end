import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Notice } from 'src/app/service/notice';
import { NoticeService } from 'src/app/service/notice.service';
import { EditNoticeDialogComponent } from '../edit-notice-dialog/edit-notice-dialog.component';


@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.css']
})
export class EditNoticeComponent  implements OnInit{



  constructor(private noticeService:NoticeService,private dialog: MatDialog,private http:HttpClient,private snackBar: MatSnackBar){}
  noticeDetails:Notice[]=[];
  displayedColumns: string[] = ['id','title','message','date','updateButton','deleteButton'];


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
        this.noticeDetails = data.map((notice: Notice) => {
          return {
            ...notice,
            date: new Date(notice.date.toString()).toLocaleDateString('en-GB')
          };
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  


  openEditDialog(notice: Notice): void {
    const dialogRef = this.dialog.open(EditNoticeDialogComponent, {
      data: notice
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the student record
        this.noticeService.updateNotice(result.id, result).subscribe(
          (data: any) => {
            console.log(data);
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      }
    });
  }



  
  public updateNotice(notice: Notice) {
    this.isEditing = true;
    const dialogRef = this.dialog.open(EditNoticeDialogComponent, {
      data: notice
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       
        this.noticeService.updateNotice(result.id, result).subscribe(
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


  public deleteNotice(notice: Notice) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure you want to delete this record?"
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete the student record
        this.noticeService.deleteNotice(notice.id).subscribe(
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










