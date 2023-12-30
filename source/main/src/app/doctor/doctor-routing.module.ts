import { Page404Component } from './../authentication/page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { SettingsComponent } from './settings/settings.component';
import { ItemStockListComponent } from './inventory/item-stock-list/item-stock-list.component';
import { IssuedItemsComponent } from './inventory/issued-items/issued-items.component';
import { AllPersonasComponent } from './personas/allpersonas/allpersonas.component';
import { AddPersonaComponent } from './personas/add-persona/add-persona.component';
import { SearchPersonaComponent } from './personas/search-persona/search-persona.component';
import { AllroomComponent } from './room/allroom/allroom.component';
import { AddAllotmentComponent } from './room/add-allotment/add-allotment.component';
import { EditAllotmentComponent } from './room/edit-allotment/edit-allotment.component';
import { AllDiagnosticosComponent } from './room/diagnostico/all-diagnosticos/alldiagnosticos.component';
import { AddDiagnosticoComponent } from './room/diagnostico/add-diagnostico/add-diagnostico.component';
import { SearchDiagnosticoComponent } from './room/diagnostico/search-diagnostico/search-diagnostico.component';
import { BitacoraComponent } from 'app/doctor/inventory/item-stock-list/bitacora.component';
import { SituacionComponent } from './room/allroom/situacion.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'inventory/item-stock-list',
    component: ItemStockListComponent,
  },
  {
    path: 'inventory/issued-items',
    component: IssuedItemsComponent,
  },
  {
    path: 'personas/all-personas',
    component: AllPersonasComponent,
  },
  {
    path: 'personas/add-persona',
    component: AddPersonaComponent,
  },
  {
    path: 'personas/search-persona',
    component: SearchPersonaComponent,
  },
  {
    path: "room/all-rooms",
    component: AllroomComponent,
  },
  {
    path: "room/add-allotment",
    component: AddAllotmentComponent,
  },
  {
    path: "room/edit-allotment",
    component: EditAllotmentComponent,
  },
  {
    path: "room/all-diagnosticos",
    component: AllDiagnosticosComponent,
  },
  {
    path: "room/diagnostico/add-diagnostico",
    component: AddDiagnosticoComponent,
  },
  {
    path: "room/diagnostico/search-diagnostico",
    component: SearchDiagnosticoComponent,
  },
  {
    path: 'inventory/bitacora',
    component: BitacoraComponent,
  },
  {
    path: 'room/situacion',
    component: SituacionComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
