import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomRoutingModule } from './gestionarusuarios-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AllPersonasComponent } from './personas/allpersonas/allpersonas.component';
import { AddPersonaComponent } from './personas/add-persona/add-persona.component';
import { SearchPersonaComponent } from './personas/search-persona/search-persona.component';
import { DeleteComponent } from './personas/allpersonas/dialog/delete/delete.component';
import { FormDialogComponent } from './personas/allpersonas/dialog/form-dialog/form-dialog.component';
import { DeleteGeneroComponent } from './genero/allgeneros/dialog/delete/delete.component';
import { FormDialogGeneroComponent } from './genero/allgeneros/dialog/form-dialog/form-dialog.component';
import { AllTiposDocumentosComponent } from './tipos-documentos/alltiposdocumentos/alltiposdocumentos.component';
import { DeleteTipoDocumentoComponent } from './tipos-documentos/alltiposdocumentos/dialog/delete/delete.component';
import { FormDialogTipoDocumentoComponent } from './tipos-documentos/alltiposdocumentos/dialog/form-dialog/form-dialog.component';
import { GestionarUsuariosComponent } from './gestionar-usuarios/gestionar-usuarios.component';
import { AllUsuariosComponent } from './usuarios/allusuarios/allusuarios.component';
import { DeleteDialogUsuarioComponent } from './usuarios/allusuarios/dialog/delete/delete.component';
import { FormDialogUsuarioComponent } from './usuarios/allusuarios/dialog/form-dialog/form-dialog.component';
import { SearchDialogUsuarioComponent } from './usuarios/allusuarios/dialog/search/search.component';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { DialogformComponent } from './usuarios/add-usuario/dialogform/dialogform.component';

@NgModule({
  declarations: [
    GestionarUsuariosComponent,
    AllPersonasComponent,
    AddPersonaComponent,
    SearchPersonaComponent,
    DeleteComponent,
    FormDialogComponent,
    AllTiposDocumentosComponent,
    DeleteTipoDocumentoComponent,
    FormDialogTipoDocumentoComponent,
    AllUsuariosComponent,
    DeleteDialogUsuarioComponent,
    FormDialogUsuarioComponent,
    SearchDialogUsuarioComponent,
    AddUsuarioComponent,
    DialogformComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoomRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class GestionarUsuariosModule {}
