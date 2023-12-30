import { Page404Component } from "./../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PrescriptionsComponent } from "./prescriptions/prescriptions.component";
import { MedicalRecordsComponent } from "./medical-records/medical-records.component";
import { BillingComponent } from "./billing/billing.component";
import { SettingsComponent } from "./settings/settings.component";
import { AllPersonasComponent } from "./personas/allpersonas/allpersonas.component";
import { AddPersonaComponent } from "./personas/add-persona/add-persona.component";
import { SearchPersonaComponent } from "./personas/search-persona/search-persona.component";
import { ItemStockListComponent } from "./inventory/item-stock-list/item-stock-list.component";
import { IssuedItemsComponent } from "./inventory/issued-items/issued-items.component";
import { AllroomComponent } from "./room/allroom/allroom.component";
import { AddAllotmentComponent } from "./room/add-allotment/add-allotment.component";
import { EditAllotmentComponent } from "./room/edit-allotment/edit-allotment.component";
import { AllDiagnosticosComponent } from "./room/diagnostico/all-diagnosticos/alldiagnosticos.component";
import { AddDiagnosticoComponent } from "./room/diagnostico/add-diagnostico/add-diagnostico.component";
import { SearchDiagnosticoComponent } from "./room/diagnostico/search-diagnostico/search-diagnostico.component";
import { AllUsuariosComponent } from "./usuarios/allusuarios/allusuarios.component";
import { AddUsuarioComponent } from "./usuarios/add-usuario/add-usuario.component";
import { AchievementComponent } from "./achievements/achievement.component";
import { MaternalKitComponent } from "./maternal-kit/maternal-kit.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "appointments",
    loadChildren: () =>
      import("./appointments/appointments.module").then(
        (m) => m.AppointmentsModule
      ),
  },
  {
    path: "prescriptions",
    component: PrescriptionsComponent,
  },
  {
    path: "records",
    component: MedicalRecordsComponent,
  },
  {
    path: "billing",
    component: BillingComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  {
    path: "personas/all-personas",
    component: AllPersonasComponent,
  },
  {
    path: "personas/add-persona",
    component: AddPersonaComponent,
  },
  {
    path: "personas/search-persona",
    component: SearchPersonaComponent,
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
    path: "usuarios/all-usuarios",
    component: AllUsuariosComponent,
  },
  {
    path: "usuarios/add-usuario",
    component: AddUsuarioComponent,
  },
  {
    path: "achievement",
    component: AchievementComponent,
  },
  {
    path: "maternal-kit",
    component: MaternalKitComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
