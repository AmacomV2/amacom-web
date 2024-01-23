import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
import { SituacionRoutingModule } from '../situacion-routing.module';
import { AddDiagnosticoComponent } from './components/add-diagnostico/add-diagnostico.component';
import { AllDiagnosticosComponent } from './components/alldiagnosticos.component';
import { DeleteDiagnosticoComponent } from './components/dialog/delete-diagnostico/delete-diagnostico.component';
import { SearchDiagnosticoComponent } from './components/search-diagnostico/search-diagnostico.component';
import { ModalActividadComponent } from './components/modal-actividad/modal-actividad.component';
import { ModalIndicadoresComponent } from './components/modal-indicadores/modal-indicadores.component';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SituacionRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  declarations: [
    DeleteDiagnosticoComponent,
    AllDiagnosticosComponent,
    AddDiagnosticoComponent,
    SearchDiagnosticoComponent,
    ModalActividadComponent,
    ModalIndicadoresComponent,
  ],
  exports: [
    DeleteDiagnosticoComponent,
    AllDiagnosticosComponent,
    AddDiagnosticoComponent,
    SearchDiagnosticoComponent,
    ModalActividadComponent,
    ModalIndicadoresComponent,
  ],
})
export class DiagnosticoModule {}
