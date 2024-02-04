import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { AllMaterialComponent } from './components/allmaterial.component';
import { AddMaterialComponent } from './components/dialog/add-material/add-material.component';

const routes: Routes = [
  {
    path: '',
    component: AllMaterialComponent,
  },
  {
    path: 'add',
    component: AddMaterialComponent,
  },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialApoyoRoutingModule {}
