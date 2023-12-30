
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";
import { AllTiposDocumentosComponent } from "./alltiposdocumentos/alltiposdocumentos.component";

const routes: Routes = [
  {
    path: "all-tiposdocumentos",
    component: AllTiposDocumentosComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposDocumentosRoutingModule {}
