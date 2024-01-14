import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { AddBitacoraComponent } from './components/add-bitacora/add-bitacora.component';
import { AllBitacoraComponent } from './components/all-bitacora/all-bitacora.component';
import { BitacoraComponent } from './components/bitacora.component';

const routes: Routes = [
  {
    path: 'item-stock-list',
    component: AllBitacoraComponent,
  },
  {
    path: 'issued-items',
    component: AddBitacoraComponent,
  },
  {
    path: 'bitacora',
    component: BitacoraComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitacoraRoutingModule {}
