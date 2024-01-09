import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SharedModule } from '../shared.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CommonModule } from '@angular/common';
import { NgTableModule } from './ng-table/ng-table.module';
import { CrudContainerModule } from './crud-container/crud-container.module';
import { NgSelectAutocompleteModule } from './mat-select-complete/ng-select-autocomplete.module';
import { MatStepperMainModule } from './mat-stepper-main/mat-stepper-main.module';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [],
  exports: [
    FileUploadComponent,
    BreadcrumbModule,
    NgTableModule,
    CrudContainerModule,
    NgSelectAutocompleteModule,
    MatStepperMainModule,
  ],
})
export class ComponentsModule {}
