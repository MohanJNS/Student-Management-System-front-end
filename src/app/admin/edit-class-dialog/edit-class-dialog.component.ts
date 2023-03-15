import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from 'src/app/edit-dialog/edit-dialog.component';
import { ClassService } from 'src/app/service/class.service';
import { Studentclass } from 'src/app/service/Studentclass';
import { EditStudentComponent } from '../edit-class/edit-student.component';

@Component({
  selector: 'app-edit-class-dialog',
  templateUrl: './edit-class-dialog.component.html',
  styleUrls: ['./edit-class-dialog.component.css']
})
export class EditClassDialogComponent implements OnInit{


  constructor(private classService:ClassService,private dialog: MatDialog,private http:HttpClient,private snackBar: MatSnackBar){} 
 

  classDetails:Studentclass[]=[];
  displayedColumns: string[] = ['id','className','section','createdAt','updateButton','deleteButton'];


  isEditing: boolean = false;
  students: any;
  dataSource: any;




  ngOnInit(): void {
    this.getallClasses();
  }


  public getallClasses() {
    this.classService.getClass().subscribe(
      (data: any) => {
        console.log(data);
        this.classDetails = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }



  // openEditDialog(studentclass: Studentclass): void {
  //   const dialogRef = this.dialog.open(EditDialogComponent, {
  //     data: studentclass
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // Update the student record
  //       this.classService.updateClass(result.id, result).subscribe(
  //         (data: any) => {
  //           console.log(data);
  //         },
  //         (error: HttpErrorResponse) => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   });
  // }

  openEditDialog(studentclass: Studentclass): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: studentclass
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the student record
        this.classService.updateClass(result.id, result).subscribe(
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







  
  public updateClass(studentclass: Studentclass) {
    this.isEditing = true;
    const dialogRef = this.dialog.open(EditStudentComponent, {
      data: studentclass
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
   
        this.classService.updateClass(result.id, result).subscribe(
          (data: any) => {
            console.log(data);
            this.getallClasses();// Refresh the data
            this.snackBar.open('Class record updated successfully', 'Close', { duration: 3000 });
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      }
    });
  }


  public deleteClass(studentclass: Studentclass) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure you want to delete this class?"
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
  
        this.classService.deleteClass(studentclass.id).subscribe(
          (data) => {
            console.log(data);
            this.snackBar.open('Class deleted successfully', '', {
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
