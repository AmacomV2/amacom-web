import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { ServicioDTO } from '../../servicio.model';

export interface DialogData {
  id: number;
  action: string;
  servicioList: ServicioDTO;
}

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogServicioComponent implements OnInit{
  action: string;
  dialogTitle: string;
  form: UntypedFormGroup;
  servicioList: ServicioDTO;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    // Set the defaults
    this.action = this.data.action;
    this.servicioList = this.data.row;
    if (this.action === 'edit') {
      this.dialogTitle = 'Editar servicio';
    } else {
      this.dialogTitle = 'Adicionar servicio';
    }
    this.form = this.createContactForm();
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.servicioList?.id],
      name: [this.servicioList?.name],
      description: [this.servicioList?.description],
      createdAt: [this.servicioList?.createdAt],
    });
  }

}
