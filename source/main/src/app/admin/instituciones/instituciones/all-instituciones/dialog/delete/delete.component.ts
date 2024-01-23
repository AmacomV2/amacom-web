import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { InstitucionDTO } from '../../../models/institucion.model';

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteInstitucionComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteInstitucionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: InstitucionDTO }
  ) {}
}
