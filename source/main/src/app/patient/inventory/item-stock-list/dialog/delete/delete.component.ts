import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  id: number;
  descripcion: string;
  i_name: string;
  date: string;
}

@Component({
  selector: 'app-delete-bitacora-bitacora:not(h)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
  //  this.itemStockListService.deleteItemStockList(this.data.id);
  }
}
