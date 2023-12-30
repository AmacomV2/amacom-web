import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { ServicioList } from '../../servicio.model';

export interface DialogData {
  id: number;
  action: string;
  servicioList: ServicioList;
}

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogServicioComponent {
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  servicioList: ServicioList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogServicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar servicio";
    this.servicioList = data.servicioList;
     } else {
     this.dialogTitle = 'Adicionar servicio';
      const blankObject = {} as ServicioList;
      this.servicioList = new ServicioList(blankObject);
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
      id: [this.servicioList.id],
      nombre: [this.servicioList.nombre],
      descripcion: [this.servicioList.descripcion],
      date: [this.servicioList.date],
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
