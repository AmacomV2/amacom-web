import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { TemaDTO } from '../../models/tema.model';

export interface DialogData {
  id: number;
  nombre: string;
  tipo: string;
  estado: string;
  validez: string;
  temaPadre: string;
  descripcion: string;
  date: string;
  action: string;
}

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteTemaComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTemaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: TemaDTO }
  ) {}
}
