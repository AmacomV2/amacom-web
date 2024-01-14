import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitacoraRoutingModule } from './bitacora-routing.module';
import { AllBitacoraComponent } from './components/all-bitacora/all-bitacora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { AddBitacoraComponent } from './components/add-bitacora/add-bitacora.component';
import { BitacoraComponent } from './components/bitacora.component';
import { ComponentsModule } from '@shared/components/components.module';
import { DeleteBitacoraComponent } from './components/dialog/delete-bitacora/delete-bitacora.component';

@NgModule({
  declarations: [
    AllBitacoraComponent,
    AddBitacoraComponent,
    DeleteBitacoraComponent,
    BitacoraComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BitacoraRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
  exports:[
    AllBitacoraComponent,
    DeleteBitacoraComponent,
    AddBitacoraComponent,
    BitacoraComponent,
  ]
})
export class BitacoraModule {}
