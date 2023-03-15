import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import baseUrl from '../service/helper';
import { Student } from '../service/Student';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit{
  classes: any;
  selectedClass: any;



  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,private http:HttpClient) {}



  ngOnInit(): void {
    this.http.get(`${baseUrl}/classes/`).subscribe((data:any)=> {
      this.classes = data;


    });
  }

  onClassSelected() {
    this.selectedClass = this.classes.find((c: { id: number; }) => c.id === this.data.studentClassId);
  }
    


  
  // onSaveClick(): void {
  //   this.dialogRef.close(this.data);
  // }
    

  onCancelClick(): void {
    this.dialogRef.close();
  }


  changeClass(event: any) {
  
  }



}
