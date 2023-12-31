import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { formatDate } from '@angular/common';

export interface DialogData {
  id: number;
  action: string;
}

@Component({
  selector: 'app-form-dialog:not(n)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogUsuarioComponent {
  // action: string;
   dialogTitle: string;
   staffForm: UntypedFormGroup;
  constructor(
    public dialogRef: MatDialogRef<FormDialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    // this.action = data.action;
    // if (this.action === 'edit') {
    //   this.dialogTitle = data.staff.name;
    //   this.staff = data.staff;
    // } else {
       this.dialogTitle = 'New Staff';
      //  const blankObject = {} as Staff;
      //  this.staff = new Staff(blankObject);
    // }
    this.staffForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [''],
      img: [''],
      name: [''],
      email: [''],
      date: [
        formatDate('', 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      designation: [''],
      address: [''],
      mobile: [''],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
 //   this.staffService.addStaff(this.staffForm.getRawValue());
  }
}