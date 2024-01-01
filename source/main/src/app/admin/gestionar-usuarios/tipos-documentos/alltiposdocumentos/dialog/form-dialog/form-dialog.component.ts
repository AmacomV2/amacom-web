import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { TipoDocumentoDTO } from '../../../models/tipoDocumento.model';

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogTipoDocumentoComponent implements OnInit {
  action: string;
  form: UntypedFormGroup;
  tipoDocumento: TipoDocumentoDTO;
  constructor(
    public dialogRef: MatDialogRef<FormDialogTipoDocumentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    // Set the defaults
    this.action = this.data.action;
    if (this.action === 'edit') {
      //this.dialogTitle = 'Editar tipo de documento';
      this.tipoDocumento = this.data.row;
    } else {
      //this.dialogTitle = 'Adicionar tipo de documento';
      const blankObject = {} as TipoDocumentoDTO;
      this.tipoDocumento = new TipoDocumentoDTO(blankObject);
    }
    console.log(this.data);
    this.form = this.createContactForm();
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.tipoDocumento.id],
      name: [this.tipoDocumento.name],
      acronym: [this.tipoDocumento.acronym],
      date: [this.tipoDocumento.createdAt],
    });
  }
}
