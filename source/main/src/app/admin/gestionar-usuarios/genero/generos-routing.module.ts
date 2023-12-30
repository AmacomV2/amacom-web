
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";
import { AllGenerosComponent } from "./allgeneros/allgeneros.component";

const routes: Routes = [
  {
    path: "all-generos",
    component: AllGenerosComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerosRoutingModule {}
