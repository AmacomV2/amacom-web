
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";
import { AllTiposInstitucionesComponent } from "./all-tiposinstituciones/alltiposinstituciones.component";

const routes: Routes = [
  {
    path: "all-tiposinstituciones",
    component: AllTiposInstitucionesComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposInstitucionesRoutingModule {}
