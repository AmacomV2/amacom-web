import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "../../authentication/page404/page404.component";
import { AllTiposInstitucionesComponent } from "./tipos-instituciones/all-tiposinstituciones/alltiposinstituciones.component";
import { AllServiciosComponent } from "./servicios/all-servicios/allservicios.component";
import { AllInstitucionesComponent } from "./instituciones/all-instituciones/allinstituciones.component";
import { AddInstitucionComponent } from "./instituciones/add-instituciones/add-institucion.component";
import { SearchInstitucionComponent } from "./instituciones/search-institucion/search-institucion.component";
const routes: Routes = [
  {
    path: "tipos-instituciones/all-tiposinstituciones",
    component: AllTiposInstitucionesComponent,
  },
  {
    path: "servicios/all-servicios",
    component: AllServiciosComponent,
  },
  {
    path: "instituciones/all-instituciones",
    component: AllInstitucionesComponent,
  },
  {
    path: "instituciones/add-institucion",
    component: AddInstitucionComponent,
  },
  {
    path: "instituciones/search-institucion",
    component: SearchInstitucionComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
