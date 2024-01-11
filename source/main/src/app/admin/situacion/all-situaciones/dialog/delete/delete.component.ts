import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { SituacionService } from '../../../services/situacion.service';

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
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public roomService: SituacionService
  ) {}
}
