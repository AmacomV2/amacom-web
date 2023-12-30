import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AllServiciosComponent } from './all-servicios/allservicios.component';
import { DeleteServicioComponent } from './all-servicios/dialog/delete/delete.component';
import { FormDialogServicioComponent } from './all-servicios/dialog/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AllServiciosComponent,
    DeleteServicioComponent,
    FormDialogServicioComponent,
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class ServiciosModule {}
