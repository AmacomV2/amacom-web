import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { UsuarioDTO } from '../../../models/usuario.model';

@Component({
  selector: 'app-delete:not(n)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogUsuarioComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
