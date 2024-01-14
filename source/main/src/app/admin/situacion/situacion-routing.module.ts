import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllSituacionesComponent } from "./all-situaciones/all-situaciones.component";
import { AddSituacionComponent } from "./add-situacion/add-situacion.component";
import { ViewSituacionComponent } from "./view-situacion/view-situacion.component";
import { Page404Component } from "../../authentication/page404/page404.component";
import { AllDiagnosticosComponent } from "./diagnostico/components/alldiagnosticos.component";
import { AddDiagnosticoComponent } from "./diagnostico/components/add-diagnostico/add-diagnostico.component";
import { SearchDiagnosticoComponent } from "./diagnostico/components/search-diagnostico/search-diagnostico.component";
const routes: Routes = [
  {
    path: "all-rooms",
    component: AllSituacionesComponent,
  },
  {
    path: "add-allotment",
    component: AddSituacionComponent,
  },
  {
    path: "edit-allotment",
    component: ViewSituacionComponent,
  },
  {
    path: "all-diagnosticos",
    component: AllDiagnosticosComponent,
  },
  {
    path: "diagnostico/add-diagnostico",
    component: AddDiagnosticoComponent,
  },
  {
    path: "diagnostico/search-diagnostico",
    component: SearchDiagnosticoComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SituacionRoutingModule {}
