import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { MaterialList } from '../../material.model';

export interface DialogData {
  id: number;
  action: string;
  logro: MaterialList;
}

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogMaterialComponent {
  toppings = new UntypedFormControl();
  toppingList: string[] = [
    'Tema 5',
    'Tema 6',
    'Tema 7',
    'Tema 8',
  ];
  action: string;
  dialogTitle: string;
  usuarioForm: UntypedFormGroup;
  material: MaterialList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
    this.dialogTitle = "Editar material de apoyo";
    this.material = data.logro;
     } else {
     this.dialogTitle = 'Adicionar material de apoyo';
      const blankObject = {} as MaterialList;
      this.material = new MaterialList(blankObject);
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
      id: [this.material.id],
      genero: [this.material.nombre],
      descripcion: [this.material.descripcion],
      url: [this.material.url],
      date: [this.material.date],
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
