import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllLogrosComponent } from './components/alllogros.component';

const routes: Routes = [
  {
    path: 'all-logros',
    component: AllLogrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogrosRoutingModule {}
