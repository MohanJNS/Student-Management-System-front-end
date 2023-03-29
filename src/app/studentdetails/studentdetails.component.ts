import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../service/Student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) { }

}
