
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";
import { AllInstitucionesComponent } from "./all-instituciones/allinstituciones.component";
import { AddInstitucionComponent } from "./add-instituciones/add-institucion.component";
import { SearchInstitucionComponent } from "./search-institucion/search-institucion.component";

const routes: Routes = [
  {
    path: "all-instituciones",
    component: AllInstitucionesComponent,
  },
  {
    path: "add-institucion",
    component: AddInstitucionComponent,
  },
  {
    path: "search-institucion",
    component: SearchInstitucionComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitucionesRoutingModule {}
