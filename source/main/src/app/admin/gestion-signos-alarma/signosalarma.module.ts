import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignosAlarmaRoutingModule } from './signosalarma-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { PasoParametrosService } from '../paso-parametro.service';
import { AllSignosAlarmaComponent } from './all-signosalarma/allsignosalarma.component';
import { DeleteSignoAlarmaComponent } from './all-signosalarma/dialog/delete/delete.component';
import { FormDialogSignoAlarmaComponent } from './all-signosalarma/dialog/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AllSignosAlarmaComponent,
    DeleteSignoAlarmaComponent,
    FormDialogSignoAlarmaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignosAlarmaRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class SignosAlarmaModule {}
