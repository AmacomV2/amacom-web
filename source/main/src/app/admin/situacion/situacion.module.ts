import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SituacionRoutingModule } from './situacion-routing.module';
import { AllSituacionesComponent } from './all-situaciones/all-situaciones.component';
import { DeleteDialogComponent } from './all-situaciones/dialog/delete/delete.component';
import { FormDialogComponent } from './all-situaciones/dialog/form-dialog/form-dialog.component';
import { ViewSituacionComponent } from './view-situacion/view-situacion.component';
import { AddSituacionComponent } from './add-situacion/add-situacion.component';
import { RoomService } from './services/room.service';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { DeleteDiagnosticoComponent } from './diagnostico/all-diagnosticos/dialog/delete/delete.component';
import { AllDiagnosticosComponent } from './diagnostico/all-diagnosticos/alldiagnosticos.component';
import { FormDialogDiagnosticoComponent } from './diagnostico/all-diagnosticos/dialog/form-dialog/form-dialog.component';
import { AddDiagnosticoComponent } from './diagnostico/add-diagnostico/add-diagnostico.component';
import { SearchDiagnosticoComponent } from './diagnostico/search-diagnostico/search-diagnostico.component';

@NgModule({
  declarations: [
    AllSituacionesComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    ViewSituacionComponent,
    AddSituacionComponent,
    DeleteDiagnosticoComponent,
    FormDialogDiagnosticoComponent,
    AllDiagnosticosComponent,
    AddDiagnosticoComponent,
    SearchDiagnosticoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SituacionRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [
    AllSituacionesComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    ViewSituacionComponent,
    AddSituacionComponent,
    DeleteDiagnosticoComponent,
    FormDialogDiagnosticoComponent,
    AllDiagnosticosComponent,
    AddDiagnosticoComponent,
    SearchDiagnosticoComponent,
  ],
  providers: [RoomService],
})
export class SituacionModule {}
