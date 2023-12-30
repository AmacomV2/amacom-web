import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StaffService } from '../../staff.service';

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
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public staffService: StaffService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.staffService.deleteStaff(this.data.id);
  }
}
