import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemasRoutingModule } from './temas-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AllTemasComponent } from './all-temas/alltemas.component';
import { DeleteTemaComponent } from './all-temas/dialog/delete/delete.component';
import { FormDialogTemaComponent } from './all-temas/dialog/form-dialog/form-dialog.component';
import { AddTemaComponent } from './add-temas/add-tema.component';
import { SearchTemaComponent } from './search-temas/search-tema.component';

@NgModule({
  declarations: [
    AllTemasComponent,
    DeleteTemaComponent,
    FormDialogTemaComponent,
    AddTemaComponent,
    SearchTemaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TemasRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class TemasModule {}
