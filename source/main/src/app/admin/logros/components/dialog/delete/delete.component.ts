import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LogroDTO } from 'app/admin/logros/models/logro.model';

@Component({
  selector: 'app-delete-logro',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteLogroComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteLogroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: LogroDTO }
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    // this.patientService.deletePatient(this.data.id);
  }
}
