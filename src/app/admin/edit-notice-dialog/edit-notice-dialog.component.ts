import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Notice } from "src/app/service/notice";


@Component({
  selector: 'app-edit-notice-dialog',
  templateUrl: './edit-notice-dialog.component.html',
  styleUrls: ['./edit-notice-dialog.component.css']
})
export class EditNoticeDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<EditNoticeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notice) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
