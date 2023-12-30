import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AchievementRoutingModule } from './achievement-routing.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { AchievementComponent } from './achievement.component';

@NgModule({
  declarations: [
    AchievementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AchievementRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class AchievementModule {}
