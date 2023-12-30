import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { SignoAlarmaList } from '../../signoalarma.model';

export interface DialogData {
  id: number;
  action: string;
  signoAlarmaList: SignoAlarmaList;
}

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogSignoAlarmaComponent {
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  signoAlarmaList: SignoAlarmaList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogSignoAlarmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar signo de alarma";
    this.signoAlarmaList = data.signoAlarmaList;
     } else {
     this.dialogTitle = 'Adicionar signo de alarma';
      const blankObject = {} as SignoAlarmaList;
      this.signoAlarmaList = new SignoAlarmaList(blankObject);
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
      id: [this.signoAlarmaList.id],
      nombre: [this.signoAlarmaList.nombre],
      tipo: [this.signoAlarmaList.tipo],
      descripcion: [this.signoAlarmaList.descripcion],
      date: [this.signoAlarmaList.date],
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
