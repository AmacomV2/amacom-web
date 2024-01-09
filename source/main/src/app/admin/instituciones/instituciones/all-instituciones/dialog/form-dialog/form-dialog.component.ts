import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { InstitucionDTO } from '../../../models/institucion.model';

export interface DialogData {
  id: number;
  action: string;
  institucionList: InstitucionDTO;
}

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogInstitucionComponent {
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  institucionList: InstitucionDTO;
  constructor(
    public dialogRef: MatDialogRef<FormDialogInstitucionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar servicio";
    this.institucionList = data.institucionList;
     } else {
     this.dialogTitle = 'Adicionar servicio';
      const blankObject = {} as InstitucionDTO;
      this.institucionList = new InstitucionDTO(blankObject);
    }
    this.usuarioForm = this.createContactForm();
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
      id: [this.institucionList.id],
      nombre: [this.institucionList.nombre],
      tipo: [this.institucionList.tipo],
      descripcion: [this.institucionList.descripcion],
      date: [this.institucionList.date],
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
