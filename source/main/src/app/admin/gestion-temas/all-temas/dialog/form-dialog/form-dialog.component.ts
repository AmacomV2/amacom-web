import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { TemaDTO } from '../../models/tema.model';

export interface DialogData {
  id: number;
  action: string;
  signoAlarmaList: TemaDTO;
}

@Component({
  selector: 'app-add-material:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogTemaComponent {
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  temaList: TemaDTO;
  constructor(
    public dialogRef: MatDialogRef<FormDialogTemaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar signo de alarma";
    this.temaList = data.signoAlarmaList;
     } else {
     this.dialogTitle = 'Adicionar signo de alarma';
      const blankObject = {} as TemaDTO;
      this.temaList = new TemaDTO(blankObject);
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
      id: [this.temaList.id],
      nombre: [this.temaList.name],
      tipo: [this.temaList.validityIndicator],
      descripcion: [this.temaList.parentId],
      date: [this.temaList.createdAt],
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
