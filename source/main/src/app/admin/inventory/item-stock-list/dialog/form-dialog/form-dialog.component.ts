import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ItemStockListService } from '../../item-stock-list.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { ItemStockList } from '../../item-stock-list.model';
import { formatDate } from '@angular/common';
import { BitacoraList } from '../../bitacora.model';

export interface DialogData {
  id: number;
  action: string;
  itemStockList: BitacoraList;
  bandera: boolean;
}

@Component({
  selector: 'app-form-dialog:not(h)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent {
  dialogTitle: string;
  itemStockListForm: UntypedFormGroup;
  bandera: boolean;
  itemStockList: BitacoraList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public itemStockListService: ItemStockListService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.bandera = data.bandera;
    this.itemStockList = data.itemStockList;
    if(this.bandera===false){
      this.dialogTitle = 'EDITAR BITACORA';
    } else {
      this.dialogTitle = 'CONSULTAR BITACORA';
    }
      
    //  this.itemStockList = data.itemStockList;
   
    
    this.itemStockListForm = this.createContactForm();
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
      id: [this.itemStockList.id],
      i_name: [this.itemStockList.i_name],
      date: [this.itemStockList.date],
      descripcion: [this.itemStockList.descripcion],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    // this.itemStockListService.addItemStockList(
    //   this.itemStockListForm.getRawValue()
    // );
  }
}
