import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "../../authentication/page404/page404.component";
import { AllTemasComponent } from "./all-temas/alltemas.component";
import { AddTemaComponent } from "./add-temas/add-tema.component";
import { SearchTemaComponent } from "./search-temas/search-tema.component";
import { AllLogrosComponent } from "./logros/alllogros.component";
import { AllMaterialComponent } from "./material-apoyo/allmaterial.component";
const routes: Routes = [
  {
    path: "all-temas",
    component: AllTemasComponent,
  },
  {
    path: "add-temas",
    component: AddTemaComponent,
  },
  {
    path: "search-temas",
    component: SearchTemaComponent,
  },
  {
    path: "logros",
    component: AllLogrosComponent,
  },
  {
    path: "material-apoyo",
    component: AllMaterialComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemasRoutingModule {}
