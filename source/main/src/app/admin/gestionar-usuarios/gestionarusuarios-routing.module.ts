import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "../../authentication/page404/page404.component";
import { GestionarUsuariosComponent } from "./gestionar-usuarios/gestionar-usuarios.component";
import { AllPersonasComponent } from "./personas/allpersonas/allpersonas.component";
import { AddPersonaComponent } from "./personas/add-persona/add-persona.component";
import { SearchPersonaComponent } from "./personas/search-persona/search-persona.component";
import { AllGenerosComponent } from "./genero/allgeneros/allgeneros.component";
import { AllTiposDocumentosComponent } from "./tipos-documentos/alltiposdocumentos/alltiposdocumentos.component";
import { AllUsuariosComponent } from "./usuarios/allusuarios/allusuarios.component";
import { AddUsuarioComponent } from "./usuarios/add-usuario/add-usuario.component";
const routes: Routes = [
  {
    path: "gestionar-usuarios",
    component: GestionarUsuariosComponent,
  },
  {
    path: "personas/all-personas",
    component: AllPersonasComponent,
  },
  {
    path: "personas/add-persona",
    component: AddPersonaComponent,
  },
  {
    path: "personas/search-persona",
    component: SearchPersonaComponent,
  },
  {
    path: "generos",
    children: [
      {
        path: "",
        loadChildren: () => import('./genero/generos.module').then(m => m.GenerosModule),
      },
    ],
  },
  {
    path: "tipos-documentos/all-tiposdocumentos",
    component: AllTiposDocumentosComponent,
  },
  {
    path: "usuarios/all-usuarios",
    component: AllUsuariosComponent,
  },
  {
    path: "usuarios/add-usuario",
    component: AddUsuarioComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
