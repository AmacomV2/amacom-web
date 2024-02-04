import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLogrosComponent } from './components/alllogros.component';
import { LogrosRoutingModule } from './logros-routing.module';
import { SharedModule } from '@shared';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';
import { DeleteLogroComponent } from './components/dialog/delete/delete.component';
import { FormDialogLogroComponent } from './components/dialog/form-dialog/form-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule,
    LogrosRoutingModule,
  ],
  declarations: [
    AllLogrosComponent,
    FormDialogLogroComponent,
    DeleteLogroComponent,
  ],
})
export class LogrosModule {}
