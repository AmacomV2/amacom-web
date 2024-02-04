import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';

const routes: Routes = [
  // {
  //   path: 'gestionar-usuarios',
  //   loadChildren: () =>
  //     import('./personas/personas.module').then((m) => m.PersonasModule),
  // },
  // {
  //   path: "gestionar-usuarios",
  //   component: GestionarUsuariosComponent,
  // },
  // {
  //   path: "personas/all-personas",
  //   component: AllPersonasComponent,
  // },
  // {
  //   path: "personas/add-persona",
  //   component: AddPersonaComponent,
  // },
  // {
  //   path: "personas/search-persona",
  //   component: SearchPersonaComponent,
  // },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuario.module').then((m) => m.UsuarioModule),
    data: {
      breadcrumb: {
        title: 'Usuarios',
      },
    },
  },
  {
    path: 'personas',
    loadChildren: () =>
      import('./personas/personas.module').then((m) => m.PersonasModule),
    data: {
      breadcrumb: {
        title: 'Personas',
      },
    },
  },
  {
    path: 'generos',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./genero/generos.module').then((m) => m.GenerosModule),
      },
    ],
    data: {
      breadcrumb: {
        title: 'Generos',
      },
    },
  },
  {
    path: 'tipos-documentos',
    loadChildren: () =>
      import('./tipos-documentos/tiposdocumentos.module').then(
        (m) => m.TiposDocumentosModule
      ),
    data: {
      breadcrumb: {
        title: 'Tipos de documento',
      },
    },
  },
  // {
  //   path: "tipos-documentos/all-tiposdocumentos",
  //   component: AllTiposDocumentosComponent,
  // },
  // {
  //   path: "usuarios/all-usuarios",
  //   component: AllUsuariosComponent,
  // },
  // {
  //   path: "usuarios/add-usuario",
  //   component: AddUsuarioComponent,
  // },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarUsuariosRoutingModule {}
