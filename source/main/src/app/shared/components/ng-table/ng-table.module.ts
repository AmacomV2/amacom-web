import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTableComponent } from './ng-table.component';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FeatherIconsModule,
    MatIconModule,
    MatButtonModule,
    PipesModule,
  ],
  declarations: [NgTableComponent],
  exports: [NgTableComponent]
})
export class NgTableModule { }
