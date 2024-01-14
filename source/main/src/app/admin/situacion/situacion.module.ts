import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SituacionRoutingModule } from './situacion-routing.module';
import { AllSituacionesComponent } from './all-situaciones/all-situaciones.component';
import { DeleteSituacionDialogComponent } from './all-situaciones/dialog/delete/delete.component';
import { ViewSituacionComponent } from './view-situacion/view-situacion.component';
import { AddSituacionComponent } from './add-situacion/add-situacion.component';
import { SituacionService } from './services/situacion.service';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { DiagnosticoModule } from './diagnostico/diagnostico.module';

@NgModule({
  declarations: [
    AllSituacionesComponent,
    DeleteSituacionDialogComponent,
    ViewSituacionComponent,
    AddSituacionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SituacionRoutingModule,
    ComponentsModule,
    SharedModule,
    DiagnosticoModule,
  ],
  exports: [
    AllSituacionesComponent,
    DeleteSituacionDialogComponent,
    ViewSituacionComponent,
    AddSituacionComponent,
  ],
  providers: [SituacionService],
})
export class SituacionModule {}
