import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';

export interface DialogData {
  id: number;
  action: string;
}

@Component({
  selector: 'app-add-material:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogPersonaComponent {
  action: string;
  dialogTitle: string;
  patientForm: UntypedFormGroup;
  patient: any;
  constructor(
    public dialogRef: MatDialogRef<FormDialogPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    // if (this.action === 'edit') {
    //   this.dialogTitle = data.patient.name;
    //   this.patient = data.patient;
    // } else {
     this.dialogTitle = 'New Patient';
    //   const blankObject = {} as Patient;
    //   this.patient = new Patient(blankObject);
    // }
    this.patientForm = this.createContactForm();
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
      id: [this.patient.id],
      img: [this.patient.img],
      name: [this.patient.name],
      gender: [this.patient.gender],
      date: [this.patient.date],
      bGroup: [this.patient.bGroup],
      mobile: [this.patient.mobile],
      address: [this.patient.address],
      treatment: [this.patient.treatment],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    // this.patientService.addPatient(this.patientForm.getRawValue());
  }
}
