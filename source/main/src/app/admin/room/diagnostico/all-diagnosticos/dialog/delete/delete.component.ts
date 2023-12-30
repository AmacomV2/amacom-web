import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  id: number;
  resultado: string;
  alerta: string;
  estado: string;
  date: string;
}

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDiagnosticoComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDiagnosticoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    // this.patientService.deletePatient(this.data.id);
  }
}
