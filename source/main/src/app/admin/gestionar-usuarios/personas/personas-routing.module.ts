
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";
import { AddPersonaComponent } from "./add-persona/add-persona.component";
import { AllPersonasComponent } from "./allpersonas/allpersonas.component";
import { SearchPersonaComponent } from "./search-persona/search-persona.component";

const routes: Routes = [
  {
    path: "all-personas",
    component: AllPersonasComponent,
  },
  {
    path: "add-persona",
    component: AddPersonaComponent,
  },
  {
    path: "search-persona",
    component: SearchPersonaComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasRoutingModule {}
