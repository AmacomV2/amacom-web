import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemasRoutingModule } from './temas-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { PasoParametrosService } from '../paso-parametro.service';
import { AllTemasComponent } from './all-temas/alltemas.component';
import { DeleteTemaComponent } from './all-temas/dialog/delete/delete.component';
import { FormDialogTemaComponent } from './all-temas/dialog/form-dialog/form-dialog.component';
import { AddTemaComponent } from './add-temas/add-tema.component';
import { SearchTemaComponent } from './search-temas/search-tema.component';
import { AllLogrosComponent } from './logros/alllogros.component';
import { DeleteLogroComponent } from './logros/dialog/delete/delete.component';
import { FormDialogLogroComponent } from './logros/dialog/form-dialog/form-dialog.component';
import { AllMaterialComponent } from './material-apoyo/allmaterial.component';
import { DeleteMaterialComponent } from './material-apoyo/dialog/delete/delete.component';
import { FormDialogMaterialComponent } from './material-apoyo/dialog/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AllTemasComponent,
    DeleteTemaComponent,
    FormDialogTemaComponent,
    AddTemaComponent,
    SearchTemaComponent,
    AllLogrosComponent,
    DeleteLogroComponent,
    FormDialogLogroComponent,
    AllMaterialComponent,
    DeleteMaterialComponent,
    FormDialogMaterialComponent,
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
