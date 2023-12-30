import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { FeatherModule } from 'angular-feather';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FeatherModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
