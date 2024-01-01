import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappingPipe } from './mapping.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [MappingPipe],
  declarations: [MappingPipe],
  providers: [MappingPipe],
})
export class PipesModule {}
