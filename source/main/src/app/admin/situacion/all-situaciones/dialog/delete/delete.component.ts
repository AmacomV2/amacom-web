import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { SituacionService } from '../../../services/situacion.service';
import { SituacionDTO } from 'app/admin/situacion/models/situacion.model';

@Component({
  selector: 'app-delete:not(m)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteSituacionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteSituacionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: SituacionDTO }
  ) {}
}
