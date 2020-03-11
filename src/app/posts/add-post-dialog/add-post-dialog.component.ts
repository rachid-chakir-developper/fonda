import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.scss']
})
export class AddPostDialogComponent implements OnInit {
  postFormGroup: FormGroup;
  hasCode : any;
  constructor(
    public dialogRef: MatDialogRef<AddPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id : any,  body: any },
    private _formBuilder: FormBuilder) {}

  // convenience getter for easy access to form fields
get fc() { return this.postFormGroup.controls; }
ngOnInit() {
  this.postFormGroup = this._formBuilder.group({
    id: [''],
    body: [this.data.body, Validators.required],
  });
}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
