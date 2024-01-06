import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoInstitucionDTO } from '../../../models/tipoInstitucion.model';

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogTipoInstitucionComponent implements OnInit {
  action: string;
  dialogTitle: string;
  form: UntypedFormGroup;
  tipoInstitucion: TipoInstitucionDTO;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    // Set the defaults
    this.action = this.data.action;
    this.tipoInstitucion = this.data.row;
    if (this.action === 'edit') {
      this.dialogTitle = 'Editar tipo de institución';
    } else {
      this.dialogTitle = 'Adicionar tipo de institución';
    }
    this.form = this.createContactForm();
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.tipoInstitucion?.id],
      name: [this.tipoInstitucion?.name, [Validators.required]],
      description: [this.tipoInstitucion?.description, [Validators.required]],
      createdAt: [this.tipoInstitucion?.createdAt],
    });
  }
}
