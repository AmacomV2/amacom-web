import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { SignoAlarmaDTO } from '../../models/signoalarma.model';

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteSignoAlarmaComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteSignoAlarmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: SignoAlarmaDTO },
    private pasoParametrosService: PasoParametrosService
  ) {}
}
