import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { TipoInstitucionList } from '../../tipoInstitucion.model';

export interface DialogData {
  id: number;
  action: string;
  tipoInstitucion: TipoInstitucionList;
}

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogTipoInstitucionComponent {
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  tipoInstitucion: TipoInstitucionList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogTipoInstitucionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar tipo de institución";
    this.tipoInstitucion = data.tipoInstitucion;
     } else {
     this.dialogTitle = 'Adicionar tipo de institución';
      const blankObject = {} as TipoInstitucionList;
      this.tipoInstitucion = new TipoInstitucionList(blankObject);
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
      id: [this.tipoInstitucion.id],
      nombre: [this.tipoInstitucion.nombre],
      descripcion: [this.tipoInstitucion.descripcion],
      date: [this.tipoInstitucion.date],
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
