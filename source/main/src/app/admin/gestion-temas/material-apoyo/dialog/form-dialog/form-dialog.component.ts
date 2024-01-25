import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { MaterialDTO } from '../../material.model';
import { ModalCRUDPayload } from '@shared/components/crud-container/models/modal.payload';

@Component({
  selector: 'app-form-dialog:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogMaterialComponent implements OnInit {
  toppings = new UntypedFormControl();
  toppingList: string[] = ['Tema 5', 'Tema 6', 'Tema 7', 'Tema 8'];
  action: string;
  dialogTitle: string;
  form: UntypedFormGroup;
  material: MaterialDTO;
  constructor(
    public dialogRef: MatDialogRef<FormDialogMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalCRUDPayload<MaterialDTO>,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.action = this.data.action;
    this.material = this.data.row;

    this.form = this.createContactForm();
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.material?.id],
      name: [this.material?.name, Validators.required],
      description: [this.material?.description, Validators.required],
      path: [this.material?.path],
    });
  }
}
