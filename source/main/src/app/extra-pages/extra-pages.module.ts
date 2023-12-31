import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraPagesRoutingModule } from './extra-pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { SettingsComponent } from './blank/settings.component';
@NgModule({
  declarations: [
    ProfileComponent,
    PricingComponent,
    InvoiceComponent,
    FaqsComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class ExtraPagesModule {}
