import { PatientProfileComponent } from "./patient-profile/patient-profile.component";
import { EditPatientComponent } from "./edit-patient/edit-patient.component";
import { AddPatientComponent } from "./add-patient/add-patient.component";
import { AllpatientsComponent } from "./allpatients/allpatients.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "app/authentication/page404/page404.component";

const routes: Routes = [
  {
    path: "all-patients",
    component: AllpatientsComponent,
  },
  {
    path: "add-patient",
    component: AddPatientComponent,
  },
  {
    path: "edit-patient",
    component: EditPatientComponent,
  },
  {
    path: "patient-profile",
    component: PatientProfileComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
