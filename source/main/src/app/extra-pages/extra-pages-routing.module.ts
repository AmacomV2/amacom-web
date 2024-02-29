import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "setting",
    loadChildren: () =>
      import("../admin/gestionar-usuarios/personas/personas.module").then(
        (m) => m.PersonasModule
      ),
    //component: SettingsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraPagesRoutingModule {}
