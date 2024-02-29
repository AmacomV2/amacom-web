import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { PatientRoutingModule } from './patient-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AddPersonaComponent } from './personas/add-persona/add-persona.component';
import { AllPersonasComponent } from './personas/allpersonas/allpersonas.component';
import { SearchPersonaComponent } from './personas/search-persona/search-persona.component';
import { DeletePersonaComponent } from './personas/allpersonas/dialog/delete/delete.component';
import { FormDialogPersonaComponent } from './personas/allpersonas/dialog/form-dialog/form-dialog.component';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { ItemStockListComponent } from './inventory/item-stock-list/item-stock-list.component';
import { FormDialogComponent } from './inventory/item-stock-list/dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './inventory/item-stock-list/dialog/delete/delete.component';
import { IssuedItemsComponent } from './inventory/issued-items/issued-items.component';
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
import { AllUsuariosComponent } from './usuarios/allusuarios/allusuarios.component';
import { DeleteDialogUsuarioComponent } from './usuarios/allusuarios/dialog/delete/delete.component';
import { FormDialogUsuarioComponent } from './usuarios/allusuarios/dialog/form-dialog/form-dialog.component';
import { SearchDialogUsuarioComponent } from './usuarios/allusuarios/dialog/search/search.component';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { DialogformComponent } from './usuarios/add-usuario/dialogform/dialogform.component';
import { AchievementComponent } from './achievements/achievement.component';
import { MaternalKitComponent } from './maternal-kit/maternal-kit.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AddPersonaComponent,
    AllPersonasComponent,
    SearchPersonaComponent,
    DeletePersonaComponent,
    FormDialogPersonaComponent,
    ItemStockListComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    IssuedItemsComponent,
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
    AllUsuariosComponent,
    DeleteDialogUsuarioComponent,
    FormDialogUsuarioComponent,
    SearchDialogUsuarioComponent,
    AddUsuarioComponent,
    DialogformComponent,
    AchievementComponent,
    MaternalKitComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    PatientRoutingModule,
    NgApexchartsModule,
    NgScrollbarModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [PasoParametrosService],
})
export class PatientModule {}
