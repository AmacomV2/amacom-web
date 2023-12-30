import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffRoutingModule } from './staff-routing.module';
import { AllstaffComponent } from './allstaff/allstaff.component';
import { FormDialogComponent } from './allstaff/dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './allstaff/dialog/delete/delete.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffService } from './allstaff/staff.service';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { DialogformComponent } from './add-staff/dialogform/dialogform.component';
import { SearchDialogComponent } from './allstaff/dialog/search/search.component';

@NgModule({
  declarations: [
    AllstaffComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    AddStaffComponent,
    EditStaffComponent,
    StaffProfileComponent,
    DialogformComponent,
    SearchDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StaffRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [StaffService],
})
export class StaffModule {}
