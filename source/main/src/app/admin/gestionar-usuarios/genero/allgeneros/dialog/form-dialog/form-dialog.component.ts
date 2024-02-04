import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { GeneroList } from '../../../models/genero.model';
import { IDialogActions } from '@core/dialog/interfaces/dialog.modal.interface';

export interface DialogData {
  id: number;
  action: string;
  genero: GeneroList;
}

@Component({
  selector: 'app-add-material:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogGeneroComponent implements OnInit, IDialogActions {
  action: string;
  dialogTitle: string;
  form: UntypedFormGroup;
  genero: GeneroList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogGeneroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: UntypedFormBuilder
  ) {}
  
  ngOnInit(): void {
    // Set the defaults
    this.action = this.data.action;
    if (this.action === 'edit') {
      //this.dialogTitle = 'Editar genero';
      this.genero = this.data.row;
    } else {
      //this.dialogTitle = 'Adicionar genero';
      const blankObject = {} as GeneroList;
      this.genero = new GeneroList(blankObject);
    }
    this.form = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);

  onCancel(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.formControl.hasError('required')
    ? 'Required field'
    : this.formControl.hasError('email')
    ? 'Not a valid email'
    : '';
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.genero.id],
      name: [this.genero.name],
      createdAt: [this.genero.createdAt],
    });
  }
}
