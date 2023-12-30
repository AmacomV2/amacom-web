import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

export interface DialogData {
  id: number;
  nombre: string;
  tipo: string;
  estado: string;
  descripcion: string;
  date: string;
  action: string;
}

@Component({
  selector: 'app-delete:not(i)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteSignoAlarmaComponent {
  action: boolean = false;
  dialogTitle: string;
  constructor(
    public dialogRef: MatDialogRef<DeleteSignoAlarmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pasoParametrosService: PasoParametrosService
  ) {
    this.action = this.pasoParametrosService.obtenerParametro("action");
    
    if (this.action == true) {
    this.dialogTitle = "Consultar signo de alarma";
     } else {
     this.dialogTitle = '¿Está seguro de eliminar el signo de alarma?';
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    // this.patientService.deletePatient(this.data.id);
  }
}
