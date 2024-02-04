import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsuariosComponent } from './allusuarios/allusuarios.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
const routes: Routes = [
  {
    path: 'all-usuarios',
    component: AllUsuariosComponent,
    data: {
      breadcrumb: {
        title: 'Todos Usuarios',
      },
    },
  },
  {
    path: 'add-usuario',
    component: AddUsuarioComponent,
    data: {
      breadcrumb: {
        title: 'Agregar Usuario',
      },
    },
  },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
