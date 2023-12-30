
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";
import { AllServiciosComponent } from "./all-servicios/allservicios.component";

const routes: Routes = [
  {
    path: "all-servicios",
    component: AllServiciosComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
