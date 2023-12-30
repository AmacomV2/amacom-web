import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonasRoutingModule } from './personas-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { DeleteComponent } from './allpersonas/dialog/delete/delete.component';
import { FormDialogComponent } from './allpersonas/dialog/form-dialog/form-dialog.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { SearchPersonaComponent } from './search-persona/search-persona.component';
import { AllPersonasComponent } from './allpersonas/allpersonas.component';

@NgModule({
  declarations: [
    AddPersonaComponent,
    AllPersonasComponent,
    SearchPersonaComponent,
    DeleteComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class PersonasModule {}
