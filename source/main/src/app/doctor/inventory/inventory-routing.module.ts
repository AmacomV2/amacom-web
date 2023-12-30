import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { IssuedItemsComponent } from './issued-items/issued-items.component';
import { ItemStockListComponent } from './item-stock-list/item-stock-list.component';
import { BitacoraComponent } from './item-stock-list/bitacora.component';

const routes: Routes = [
  {
    path: 'item-stock-list',
    component: ItemStockListComponent,
  },
  {
    path: 'issued-items',
    component: IssuedItemsComponent,
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
export class InventoryRoutingModule {}
