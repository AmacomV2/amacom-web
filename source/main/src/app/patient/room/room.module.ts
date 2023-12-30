import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomRoutingModule } from './room-routing.module';
import { AllroomComponent } from './allroom/allroom.component';
import { DeleteSituacionDialogComponent } from './allroom/dialog/delete/delete.component';
import { FormDialogSituacionComponent } from './allroom/dialog/form-dialog/form-dialog.component';
import { EditAllotmentComponent } from './edit-allotment/edit-allotment.component';
import { AddAllotmentComponent } from './add-allotment/add-allotment.component';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { DeleteDiagnosticoComponent } from './diagnostico/all-diagnosticos/dialog/delete/delete.component';
import { AllDiagnosticosComponent } from './diagnostico/all-diagnosticos/alldiagnosticos.component';
import { FormDialogDiagnosticoComponent } from './diagnostico/all-diagnosticos/dialog/form-dialog/form-dialog.component';
import { AddDiagnosticoComponent } from './diagnostico/add-diagnostico/add-diagnostico.component';
import { SearchDiagnosticoComponent } from './diagnostico/search-diagnostico/search-diagnostico.component';

@NgModule({
  declarations: [
    AllroomComponent,
    DeleteSituacionDialogComponent,
    FormDialogSituacionComponent,
    EditAllotmentComponent,
    AddAllotmentComponent,
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
    RoomRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class RoomModule {}
