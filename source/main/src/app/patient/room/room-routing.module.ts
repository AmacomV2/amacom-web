import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllroomComponent } from "./allroom/allroom.component";
import { AddAllotmentComponent } from "./add-allotment/add-allotment.component";
import { EditAllotmentComponent } from "./edit-allotment/edit-allotment.component";
import { Page404Component } from "./../../authentication/page404/page404.component";
import { AllDiagnosticosComponent } from "./diagnostico/all-diagnosticos/alldiagnosticos.component";
import { AddDiagnosticoComponent } from "./diagnostico/add-diagnostico/add-diagnostico.component";
import { SearchDiagnosticoComponent } from "./diagnostico/search-diagnostico/search-diagnostico.component";
const routes: Routes = [
  {
    path: "all-rooms",
    component: AllroomComponent,
  },
  {
    path: "add-allotment",
    component: AddAllotmentComponent,
  },
  {
    path: "edit-allotment",
    component: EditAllotmentComponent,
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
export class RoomRoutingModule {}
