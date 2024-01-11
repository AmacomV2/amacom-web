import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ServicioDTO } from '../../servicio.model';

export interface DialogData {
  id: number;
  nombre: string;
  descripcion: string;
  date: string;
}

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteServicioComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteServicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: ServicioDTO }
  ) {}
}
