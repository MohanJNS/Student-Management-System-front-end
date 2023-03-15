import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from 'src/app/edit-dialog/edit-dialog.component';
import { Student } from 'src/app/service/Student';
import { StudentService } from 'src/app/service/student.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit{




  studentDetails:Student[]=[];
  displayedColumns: string[] = ['id','studentName','className','section','studentClassId','studentId','address','updateButton','deleteButton'];
  isEditing: boolean = false;
students: any;
  dataSource: any;

  

  constructor(private studentService:StudentService, private http: HttpClient,private dialog: MatDialog,private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getallStudents();

  }
   




  public getallStudents(){
    this.studentService.getStudent().subscribe(
      (data: any) =>{
        console.log(data);
        this.studentDetails=data;
      },(error:HttpErrorResponse)=>{
        console.log(error);
      }   
    );
  }

  // public updateRecord(student: Student) {
  //   this.studentService.updateStudent(student.id, student).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       this.isEditing = false;
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }
  
  openEditDialog(student: Student): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: student
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the student record
        this.studentService.updateStudent(result.id, result).subscribe(
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
  


  // public updateRecord(student: Student) {
  //   this.openEditDialog(student);
  // }
  

// public updateRecord(student: Student) {
//   const dialogRef = this.dialog.open(EditDialogComponent, {
//     data: student
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     if (result) {
//       // Update the student record
//       this.studentService.updateStudent(result.id, result).subscribe(
//         (data: any) => {
//           console.log(data);
//           this.getallStudents; // Refresh the data
//         },
//         (error: HttpErrorResponse) => {
//           console.log(error);
//         }
//       );
//     }
//   });
// }


public updateRecord(student: Student) {
  
  const dialogRef = this.dialog.open(EditDialogComponent, {
    data: student
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Update the student record
      this.studentService.updateStudent(result.id, result).subscribe(
        (data: any) => {
          console.log(data);
          this.getallStudents(); // Refresh the data
          this.snackBar.open('Student record updated successfully', 'Close', { duration: 3000 });
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  });
}





  // public deleteRecord(student: Student) {
  //   this.studentService.deleteStudent(student.id).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //     }, (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }

  public deleteRecord(student: Student) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure you want to delete this record?"
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete the student record
        this.studentService.deleteStudent(student.id).subscribe(
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
  










  exportToExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.studentDetails);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    this.saveAs(data, 'notice-data.xlsx');
  }
  
  saveAs(data: Blob, fileName: string): void {
    const a = document.createElement('a');
    const url = URL.createObjectURL(data);
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }
  










}
