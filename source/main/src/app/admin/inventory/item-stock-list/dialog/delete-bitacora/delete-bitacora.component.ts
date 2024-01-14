import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ItemStockListService } from '../../item-stock-list.service';

export interface DialogData {
  id: number;
  descripcion: string;
  i_name: string;
  date: string;
}

@Component({
  selector: 'app-delete-bitacora-bitacora:not(h)',
  templateUrl: './delete-bitacora.component.html',
  styleUrls: ['./delete-bitacora.component.scss'],
})
export class DeleteBitacoraComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteBitacoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public itemStockListService: ItemStockListService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.itemStockListService.deleteItemStockList(this.data.id);
  }
}
