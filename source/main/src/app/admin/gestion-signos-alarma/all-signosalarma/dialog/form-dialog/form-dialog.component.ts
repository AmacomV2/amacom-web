import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { SignoAlarmaDTO } from '../../models/signoalarma.model';

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogSignoAlarmaComponent implements OnInit {
  action: string;
  dialogTitle: string;
  form: UntypedFormGroup;
  signoAlarmaList: SignoAlarmaDTO;
  constructor(
    public dialogRef: MatDialogRef<FormDialogSignoAlarmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.action = this.data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Editar signo de alarma';
    } else {
      this.dialogTitle = 'Adicionar signo de alarma';
    }
    console.log(this.data);
    this.signoAlarmaList = this.data.row;
    this.form = this.createContactForm();
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.signoAlarmaList?.id],
      name: [this.signoAlarmaList?.name, [Validators.required]],
      type: [this.signoAlarmaList?.type, [Validators.required]],
      status: [this.signoAlarmaList?.status ?? true],
      description: [this.signoAlarmaList?.description, [Validators.required]],
      createdAt: [this.signoAlarmaList?.createdAt],
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
