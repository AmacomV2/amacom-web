import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  id: number;
  nombreUsuario: string;
  rol: string;
  correo: string;
  estado: string;
}

@Component({
  selector: 'app-delete:not(n)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogUsuarioComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
   // this.staffService.deleteStaff(this.data.id);
  }
}
