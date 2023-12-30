import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomRoutingModule } from './instituciones-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { PasoParametrosService } from '../paso-parametro.service';
import { AllTiposInstitucionesComponent } from './tipos-instituciones/all-tiposinstituciones/alltiposinstituciones.component';
import { DeleteTipoInstitucionComponent } from './tipos-instituciones/all-tiposinstituciones/dialog/delete/delete.component';
import { FormDialogTipoInstitucionComponent } from './tipos-instituciones/all-tiposinstituciones/dialog/form-dialog/form-dialog.component';
import { AllServiciosComponent } from './servicios/all-servicios/allservicios.component';
import { DeleteServicioComponent } from './servicios/all-servicios/dialog/delete/delete.component';
import { FormDialogServicioComponent } from './servicios/all-servicios/dialog/form-dialog/form-dialog.component';
import { AllInstitucionesComponent } from './instituciones/all-instituciones/allinstituciones.component';
import { DeleteInstitucionComponent } from './instituciones/all-instituciones/dialog/delete/delete.component';
import { FormDialogInstitucionComponent } from './instituciones/all-instituciones/dialog/form-dialog/form-dialog.component';
import { AddInstitucionComponent } from './instituciones/add-instituciones/add-institucion.component';
import { SearchInstitucionComponent } from './instituciones/search-institucion/search-institucion.component';

@NgModule({
  declarations: [
    AllTiposInstitucionesComponent,
    DeleteTipoInstitucionComponent,
    FormDialogTipoInstitucionComponent,
    AllServiciosComponent,
    DeleteServicioComponent,
    FormDialogServicioComponent,
    AllInstitucionesComponent,
    DeleteInstitucionComponent,
    FormDialogInstitucionComponent,
    AddInstitucionComponent,
    SearchInstitucionComponent,
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
export class InstitucionesModule {}
