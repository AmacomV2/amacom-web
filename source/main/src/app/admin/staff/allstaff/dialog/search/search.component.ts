import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StaffService } from '../../staff.service';

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
export class SearchDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public staffService: StaffService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
