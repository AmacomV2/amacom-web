import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { BitacoraDTO } from 'app/doctor/bitacora/models/bitacora.model';

@Component({
  selector: 'app-delete-bitacora-bitacora:not(h)',
  templateUrl: './delete-bitacora.component.html',
  styleUrls: ['./delete-bitacora.component.scss'],
})
export class DeleteBitacoraComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteBitacoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: BitacoraDTO }
  ) {}
}
