import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiposInstitucionesRoutingModule } from './tiposinstituciones-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AllTiposInstitucionesComponent } from './all-tiposinstituciones/alltiposinstituciones.component';
import { DeleteTipoInstitucionComponent } from './all-tiposinstituciones/dialog/delete/delete.component';
import { FormDialogTipoInstitucionComponent } from './all-tiposinstituciones/dialog/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AllTiposInstitucionesComponent,
    DeleteTipoInstitucionComponent,
    FormDialogTipoInstitucionComponent,
  ],
  imports: [
    CommonModule,
    TiposInstitucionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class TiposInstitucionesModule {}
