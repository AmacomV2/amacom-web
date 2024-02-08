import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "../../authentication/page404/page404.component";
import { AchievementComponent } from "./achievement.component";
const routes: Routes = [
  {
    path: "achievement",
    component: AchievementComponent,
    data:{
      breadcrumb: {
        title: 'Logros',
      },
    }
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementRoutingModule {}
