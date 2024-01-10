import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctors/doctors.module').then((m) => m.DoctorsModule),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('./billing/billing.module').then((m) => m.BillingModule),
  },
  {
    path: 'room',
    loadChildren: () => import('./situacion/situacion.module').then((m) => m.SituacionModule),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.module').then((m) => m.InventoryModule),
  },
  {
    path: 'records',
    loadChildren: () =>
      import('./records/records.module').then((m) => m.RecordsModule),
  },
  {
    path: 'ambulance',
    loadChildren: () =>
      import('./ambulance/ambulance.module').then((m) => m.AmbulanceModule),
  },
  {
    path: 'pharmacy',
    loadChildren: () =>
      import('./pharmacy/pharmacy.module').then((m) => m.PharmacyModule),
  },
  {
    path: 'gestionar-usuarios',
    loadChildren: () =>
      import('./gestionar-usuarios/gestionarusuarios.module').then((m) => m.GestionarUsuariosModule),
  },
  {
    path: 'instituciones',
    loadChildren: () =>
      import('./instituciones/instituciones.module').then((m) => m.InstitucionesModule),
  },
  {
    path: 'gestion-signos-alarma',
    loadChildren: () =>
      import('./gestion-signos-alarma/signosalarma.module').then((m) => m.SignosAlarmaModule),
  },
  {
    path: 'gestion-temas',
    loadChildren: () =>
      import('./gestion-temas/temas.module').then((m) => m.TemasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
