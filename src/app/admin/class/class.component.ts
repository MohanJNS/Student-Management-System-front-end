import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from 'src/app/edit-dialog/edit-dialog.component';
import { ClassService } from 'src/app/service/class.service';
import { Studentclass } from 'src/app/service/Studentclass';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { EditStudentComponent } from '../edit-class/edit-student.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit{

  constructor(private classService:ClassService,private snack:MatSnackBar,private dialog: MatDialog,private http:HttpClient,private snackBar: MatSnackBar){} 


  studentclass = {
    className: '',
    section: '',
    createdat: '',
   };


  classDetails:Studentclass[]=[];
  displayedColumns: string[] = ['id','className','section','createdAt','updateButton','deleteButton'];


  isEditing: boolean = false;
  students: any;
  dataSource: any;




  



  ngOnInit(): void {
   
  }



  

  formSubmit(){
    console.log(this.studentclass);
    if(this.studentclass.className == '' || this.studentclass.section == null){
      // alert('User is required !!');
      this.snack.open('Class is required','',{
duration:3000,
verticalPosition:'top',
horizontalPosition:'right'
      });
      
      return;
    }


    this.classService.addClass(this.studentclass).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success','class is Registered','success');
        // clear form fields
        this.studentclass.className= '';
        this.studentclass.section = '';
        this.studentclass.createdat = '';
      },
      (error: any) => {
        console.error();
        this.snack.open('Something went wrong', '', {
          duration: 3000
        });
      }
    );
    
    }


    
edit(){}



}