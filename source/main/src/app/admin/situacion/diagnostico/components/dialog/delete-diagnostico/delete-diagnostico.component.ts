import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DiagnosticoDTO } from '../../../models/diagnostico.model';

export interface DialogData {
  id: number;
  resultado: string;
  alerta: string;
  estado: string;
  date: string;
}

@Component({
  selector: 'app-delete-diagnostico:not(i)',
  templateUrl: './delete-diagnostico.component.html',
  styleUrls: ['./delete-diagnostico.component.scss'],
})
export class DeleteDiagnosticoComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDiagnosticoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: DiagnosticoDTO }
  ) {}
}
