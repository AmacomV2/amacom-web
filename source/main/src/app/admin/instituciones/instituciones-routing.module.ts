import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';

const routes: Routes = [
  {
    path: 'tipos-instituciones',
    loadChildren: () =>
      import('./tipos-instituciones/tiposinstituciones.module').then(
        (m) => m.TiposInstitucionesModule
      ),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./servicios/servicios.module').then((m) => m.ServiciosModule),
  },
  {
    path: 'instituciones',
    loadChildren: () =>
      import('./instituciones/instituciones.module').then(
        (m) => m.InstitucionesModule
      ),
  },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
