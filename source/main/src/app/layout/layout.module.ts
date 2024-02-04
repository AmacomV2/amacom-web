import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';

@NgModule({
  imports: [CommonModule, SharedModule, BreadcrumbModule],
  declarations: [],
})
export class LayoutModule {}
