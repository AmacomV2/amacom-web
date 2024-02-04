
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";
import { AllInstitucionesComponent } from "./all-instituciones/allinstituciones.component";
import { AddInstitucionComponent } from "./add-instituciones/add-institucion.component";

const routes: Routes = [
  {
    path: "all-instituciones",
    component: AllInstitucionesComponent,
    data: {
      breadcrumb: {
        title: 'Todas las Instituciones',
      },
    },
  },
  {
    path: "add-institucion",
    component: AddInstitucionComponent,
    data: {
      breadcrumb: {
        title: 'Agregar Institución',
      },
    },
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitucionesRoutingModule {}
