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
import { DialogformComponent } from './add-usuario/change-password/dialogform.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { UserCrudService } from './services/user-crud.service';

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
  providers: [UserCrudService],
})
export class UsuarioModule {}
