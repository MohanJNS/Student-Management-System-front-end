import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserNotice } from 'src/app/service/single-notice';

@Component({
  selector: 'app-edit-single-notice-dialog',
  templateUrl: './edit-single-notice-dialog.component.html',
  styleUrls: ['./edit-single-notice-dialog.component.css']
})
export class EditSingleNoticeDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<EditSingleNoticeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserNotice) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
