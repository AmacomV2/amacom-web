import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerosRoutingModule } from './generos-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { DeleteGeneroComponent } from './allgeneros/dialog/delete/delete.component';
import { FormDialogGeneroComponent } from './allgeneros/dialog/form-dialog/form-dialog.component';
import { AllGenerosComponent } from './allgeneros/allgeneros.component';

@NgModule({
  declarations: [
    AllGenerosComponent,
    DeleteGeneroComponent,
    FormDialogGeneroComponent,
  ],
  imports: [
    CommonModule,
    GenerosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
  exports: [AllGenerosComponent],
})
export class GenerosModule {}
