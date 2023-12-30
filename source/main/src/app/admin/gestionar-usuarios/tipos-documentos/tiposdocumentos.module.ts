import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiposDocumentosRoutingModule } from './tiposdocumentos-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AllTiposDocumentosComponent } from './alltiposdocumentos/alltiposdocumentos.component';
import { DeleteTipoDocumentoComponent } from './alltiposdocumentos/dialog/delete/delete.component';
import { FormDialogTipoDocumentoComponent } from './alltiposdocumentos/dialog/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AllTiposDocumentosComponent,
    DeleteTipoDocumentoComponent,
    FormDialogTipoDocumentoComponent,
  ],
  imports: [
    CommonModule,
    TiposDocumentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class TiposDocumentosModule {}
