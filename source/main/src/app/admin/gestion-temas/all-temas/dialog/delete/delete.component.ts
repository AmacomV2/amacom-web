import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

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
  action: boolean = false;
  dialogTitle: string;
  constructor(
    public dialogRef: MatDialogRef<DeleteTemaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pasoParametrosService: PasoParametrosService
  ) {
    this.action = this.pasoParametrosService.obtenerParametro("action");
    
    if (this.action == true) {
    this.dialogTitle = "Consultar tema";
     } else {
     this.dialogTitle = '¿Está seguro de eliminar el tema?';
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    // this.patientService.deletePatient(this.data.id);
  }
}
