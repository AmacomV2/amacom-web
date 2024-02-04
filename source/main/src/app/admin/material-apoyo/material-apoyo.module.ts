import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMaterialComponent } from './components/allmaterial.component';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMaterialComponent } from './components/dialog/delete/delete.component';
import { AddMaterialComponent } from './components/dialog/add-material/add-material.component';
import { MaterialApoyoRoutingModule } from './material-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { AddMaterialFileComponent } from './components/dialog/add-material-file/add-material-file.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialApoyoRoutingModule,
    MatStepperModule,
  ],
  declarations: [
    AllMaterialComponent,
    DeleteMaterialComponent,
    AddMaterialComponent,
    AddMaterialFileComponent,
  ],
})
export class MaterialApoyoModule {}
