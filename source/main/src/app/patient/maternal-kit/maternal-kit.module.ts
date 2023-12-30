import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaternalKitRoutingModule } from './maternal-kit-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { MaternalKitComponent } from './maternal-kit.component';

@NgModule({
  declarations: [
    MaternalKitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaternalKitRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class AchievementModule {}
