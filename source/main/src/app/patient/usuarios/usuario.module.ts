import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AllUsuariosComponent } from './allusuarios/allusuarios.component';
import { DeleteDialogUsuarioComponent } from './allusuarios/dialog/delete/delete.component';
import { FormDialogUsuarioComponent } from './allusuarios/dialog/form-dialog/form-dialog.component';
import { SearchDialogUsuarioComponent } from './allusuarios/dialog/search/search.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { DialogformComponent } from './add-usuario/dialogform/dialogform.component';

@NgModule({
  declarations: [
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
    UsuarioRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class UsuarioModule {}
