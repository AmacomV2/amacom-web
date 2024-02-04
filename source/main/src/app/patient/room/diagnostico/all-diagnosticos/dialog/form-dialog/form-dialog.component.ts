import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { DiagnosticoList } from '../../diagnostico.model';

export interface DialogData {
  id: number;
  action: string;
  logro: DiagnosticoList;
}

@Component({
  selector: 'app-add-material:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogDiagnosticoComponent {
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  logro: DiagnosticoList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogDiagnosticoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar logro";
    this.logro = data.logro;
     } else {
     this.dialogTitle = 'Adicionar logro';
      const blankObject = {} as DiagnosticoList;
      this.logro = new DiagnosticoList(blankObject);
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
      id: [this.logro.id],
      genero: [this.logro.resultado],
      date: [this.logro.date],
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
