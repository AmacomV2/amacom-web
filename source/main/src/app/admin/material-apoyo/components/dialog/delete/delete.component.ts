import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteMaterialComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: any }
  ) {}
}
