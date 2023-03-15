import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ClassService } from 'src/app/service/class.service';
import baseUrl from 'src/app/service/helper';

import { SingleNoticeService } from 'src/app/service/single-notice.service';
import { Student } from 'src/app/service/Student';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-single-notice',
  templateUrl: './single-notice.component.html',
  styleUrls: ['./single-notice.component.css']
})
export class SingleNoticeComponent {

  classId!: number;
  classes: any;
  students:any;
 

  public notice = {
    noticeTitle: '',
    noticeTarget: 'classId',
    classId:'',
    studentId:'',
    studentClassId:'',
    noticeMsg: '',
    creationDate: ''
  };
  filteredStudents: any[] = [];
  selectedClassId: any;
  studentId: any;



  


  constructor(private studenService:StudentService,private classService:ClassService,private service: SingleNoticeService, private router:Router,private snack:MatSnackBar,private http:HttpClient) { }

  ngOnInit() {
    this.service.getStudents().subscribe((data: any) => {
      this.students=data;     
      
    });

    this.classService.getClass().subscribe((data: any) => {
      this.classes = data;
    });


  }


 

    onchangeclass(){  
      console.log(this.notice.studentClassId);
      let id = this.notice.studentClassId;
      this.http.get<any[]>(`http://localhost:8080/students/class/${id}`).subscribe((data: any[]) => {
      this.filteredStudents = data;
    });
    }

 
  onClassSelect(event: MatSelectChange) {
    this.selectedClassId = event.value;
  }
   


  onSubmit() {
    if (this.notice.noticeTitle == '' || this.notice.noticeTitle == null) {
      this.snack.open('Notice is required', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.notice.classId = this.notice.studentClassId;
    this.service.createNotice(this.notice).subscribe(
      (data: any) => {
        console.log(data);
        
        Swal.fire('Success', 'Notice is Added', 'success');
        this.notice.noticeTitle = '';
        this.notice.noticeMsg = '';
        this.notice.studentClassId = '';
        this.notice.creationDate = '';
      },
      (error: any) => {
        console.error(error);
        this.snack.open('Something went wrong', '', {
          duration: 3000
        });
      }
    );
  }












 
}
