import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { LogroDTO } from '../../logro.model';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogLogroComponent implements OnInit {
  action: string;
  dialogTitle: string;
  form: UntypedFormGroup;
  logro: LogroDTO;

  currentIdTema: number;

  constructor(
    public dialogRef: MatDialogRef<FormDialogLogroComponent>,
    private pasoParametrosService: PasoParametrosService,
    @Inject(MAT_DIALOG_DATA) public data: { action: string; row: LogroDTO },
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.action = this.data?.action;
    this.logro = this.data?.row;
    this.currentIdTema =
      this.pasoParametrosService.obtenerParametro('tema')?.id;
    this.form = this.createContactForm();
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.logro?.id],
      name: [this.logro?.name, Validators.required],
      description: [this.logro?.description, Validators.required],
      subjectId: [
        this.logro?.subjectId ?? this.currentIdTema,
        Validators.required,
      ],
    });
  }
}
