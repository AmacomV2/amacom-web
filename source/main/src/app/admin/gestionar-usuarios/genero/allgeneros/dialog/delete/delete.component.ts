import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

export interface GeneroDTO {
  id: number;
  name: string;
  createAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteGeneroComponent {
  row: GeneroDTO;

  constructor(
    public dialogRef: MatDialogRef<DeleteGeneroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.row = data.dataComponent.row;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    // this.patientService.deletePatient(this.data.id);
  }
}
