import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { TipoInstitucionDTO } from '../../../models/tipoInstitucion.model';

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteTipoInstitucionComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTipoInstitucionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: TipoInstitucionDTO }
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    // this.patientService.deletePatient(this.data.id);
  }
}
