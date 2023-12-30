import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  id: number;
  tema: string;
  descripcion: string;
  date: string;
  gradoAfectacion: number;
}

@Component({
  selector: 'app-delete:not(m)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteSituacionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteSituacionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
  //  this.roomService.deleteRoom(this.data.id);
  }
}
