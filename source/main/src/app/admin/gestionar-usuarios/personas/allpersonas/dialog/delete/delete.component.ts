import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { PersonDTO } from '@core/models/auth.person.response';

@Component({
  selector: 'app-delete-persona',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeletePersonaComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: PersonDTO }
  ) {}
}
