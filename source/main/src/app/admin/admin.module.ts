import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { PasoParametrosService } from "./paso-parametro.service";

@NgModule({
  declarations: [
  
  ],
  imports: [CommonModule, AdminRoutingModule],
  providers: [PasoParametrosService],
})
export class AdminModule {}
