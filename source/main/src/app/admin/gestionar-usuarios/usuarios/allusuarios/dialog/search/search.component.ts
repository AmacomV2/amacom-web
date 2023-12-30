import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  id: number;
  nombreUsuario: string;
  rol: string;
  correo: string;
  estado: string;
}

@Component({
  selector: 'app-delete:not(n)',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchDialogUsuarioComponent {
  constructor(
    public dialogRef: MatDialogRef<SearchDialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
