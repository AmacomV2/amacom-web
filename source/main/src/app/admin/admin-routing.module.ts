import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: {
      breadcrumb: {
        title: 'Dashboard',
      },
    },
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
    loadChildren: () =>
      import('./situacion/situacion.module').then((m) => m.SituacionModule),
    data: {
      breadcrumb: {
        title: 'Situaciones',
      },
    },
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
      import('./gestionar-usuarios/gestionarusuarios.module').then(
        (m) => m.GestionarUsuariosModule
      ),
    data: {
      breadcrumb: {
        title: 'Gestionar Usuarios',
      },
    },
  },
  {
    path: 'instituciones',
    loadChildren: () =>
      import('./instituciones/instituciones.module').then(
        (m) => m.InstitucionesModule
      ),
    data: {
      breadcrumb: {
        title: 'Instutuciones',
      },
    },
  },
  {
    path: 'gestion-signos-alarma',
    loadChildren: () =>
      import('./gestion-signos-alarma/signosalarma.module').then(
        (m) => m.SignosAlarmaModule
      ),
    data: {
      breadcrumb: {
        title: 'Gestionar signos de alarma',
      },
    },
  },
  {
    path: 'gestion-temas',
    loadChildren: () =>
      import('./gestion-temas/temas.module').then((m) => m.TemasModule),
    data: {
      breadcrumb: {
        title: 'Gestionar temas',
      },
    },
  },
  {
    path: 'gestion-logros',
    loadChildren: () =>
      import('./logros/logros.module').then((m) => m.LogrosModule),
    data: {
      breadcrumb: {
        title: 'Gestionar logros',
      },
    },
  },
  {
    path: 'gestion-material-apoyo',
    loadChildren: () =>
      import('./material-apoyo/material-apoyo.module').then(
        (m) => m.MaterialApoyoModule
      ),
    data: {
      breadcrumb: {
        title: 'Gestionar material de apoyo',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
