import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { TipoDocumentoDTO } from '../../../models/tipoDocumento.model';

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteTipoDocumentoComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTipoDocumentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: TipoDocumentoDTO }
  ) {}
}
