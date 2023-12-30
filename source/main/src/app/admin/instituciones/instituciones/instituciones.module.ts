import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstitucionesRoutingModule } from './instituciones-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AllInstitucionesComponent } from './all-instituciones/allinstituciones.component';
import { DeleteInstitucionComponent } from './all-instituciones/dialog/delete/delete.component';
import { FormDialogInstitucionComponent } from './all-instituciones/dialog/form-dialog/form-dialog.component';
import { AddInstitucionComponent } from './add-instituciones/add-institucion.component';
import { SearchInstitucionComponent } from './search-institucion/search-institucion.component';

@NgModule({
  declarations: [
    AllInstitucionesComponent,
    DeleteInstitucionComponent,
    FormDialogInstitucionComponent,
    AddInstitucionComponent,
    SearchInstitucionComponent,
  ],
  imports: [
    CommonModule,
    InstitucionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class InstitucionesModule {}
