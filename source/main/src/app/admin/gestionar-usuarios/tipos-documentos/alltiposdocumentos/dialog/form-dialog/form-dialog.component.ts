import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { TipoDocumentoList } from '../../tipoDocumento.model';

export interface DialogData {
  id: number;
  action: string;
  genero: TipoDocumentoList;
}

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogTipoDocumentoComponent {
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  tipoDocumento: TipoDocumentoList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogTipoDocumentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar tipo de documento";
    this.tipoDocumento = data.genero;
     } else {
     this.dialogTitle = 'Adicionar tipo de documento';
      const blankObject = {} as TipoDocumentoList;
      this.tipoDocumento = new TipoDocumentoList(blankObject);
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
      id: [this.tipoDocumento.id],
      tipo: [this.tipoDocumento.tipo],
      codigo: [this.tipoDocumento.codigo],
      date: [this.tipoDocumento.date],
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
