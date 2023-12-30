import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { FormComponent } from './appointments/form/form.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { SettingsComponent } from './settings/settings.component';
import { AppointmentsService } from './appointments/appointments.service';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { ItemStockListComponent } from './inventory/item-stock-list/item-stock-list.component';
import { IssuedItemsComponent } from './inventory/issued-items/issued-items.component';
import { FormDialogComponent } from './inventory/item-stock-list/dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './inventory/item-stock-list/dialog/delete/delete.component';
import { AddPersonaComponent } from './personas/add-persona/add-persona.component';
import { AllPersonasComponent } from './personas/allpersonas/allpersonas.component';
import { SearchPersonaComponent } from './personas/search-persona/search-persona.component';
import { DeletePersonaComponent } from './personas/allpersonas/dialog/delete/delete.component';
import { FormDialogPersonaComponent } from './personas/allpersonas/dialog/form-dialog/form-dialog.component';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { AllroomComponent } from './room/allroom/allroom.component';
import { DeleteSituacionDialogComponent } from './room/allroom/dialog/delete/delete.component';
import { FormDialogSituacionComponent } from './room/allroom/dialog/form-dialog/form-dialog.component';
import { EditAllotmentComponent } from './room/edit-allotment/edit-allotment.component';
import { AddAllotmentComponent } from './room/add-allotment/add-allotment.component';
import { DeleteDiagnosticoComponent } from './room/diagnostico/all-diagnosticos/dialog/delete/delete.component';
import { FormDialogDiagnosticoComponent } from './room/diagnostico/all-diagnosticos/dialog/form-dialog/form-dialog.component';
import { AllDiagnosticosComponent } from './room/diagnostico/all-diagnosticos/alldiagnosticos.component';
import { AddDiagnosticoComponent } from './room/diagnostico/add-diagnostico/add-diagnostico.component';
import { SearchDiagnosticoComponent } from './room/diagnostico/search-diagnostico/search-diagnostico.component';
import { BitacoraComponent } from 'app/doctor/inventory/item-stock-list/bitacora.component';
import { SituacionComponent } from './room/allroom/situacion.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentsComponent,
    FormComponent,
    DoctorsComponent,
    PatientsComponent,
    SettingsComponent,
    ItemStockListComponent,
    IssuedItemsComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    AddPersonaComponent,
    AllPersonasComponent,
    SearchPersonaComponent,
    DeletePersonaComponent,
    FormDialogPersonaComponent,
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
    BitacoraComponent,
    SituacionComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MatIconModule,
    NgApexchartsModule,
    NgScrollbarModule,
    DragDropModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [AppointmentsService, PasoParametrosService],
})
export class DoctorModule {}
