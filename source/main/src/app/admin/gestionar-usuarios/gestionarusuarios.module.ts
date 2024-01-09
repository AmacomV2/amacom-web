import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionarUsuariosRoutingModule } from './gestionarusuarios-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GestionarUsuariosRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class GestionarUsuariosModule {}
