import { Page404Component } from './../authentication/page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPersonasComponent } from './personas/allpersonas/allpersonas.component';
import { AddPersonaComponent } from './personas/add-persona/add-persona.component';
import { SearchPersonaComponent } from './personas/search-persona/search-persona.component';
import { AllUsuariosComponent } from './usuarios/allusuarios/allusuarios.component';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { AchievementComponent } from './achievements/achievement.component';
import { MaternalKitComponent } from './maternal-kit/maternal-kit.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: {
        title: 'Dashbaord',
      },
    },
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'personas/all-personas',
    component: AllPersonasComponent,
  },
  {
    path: 'personas/add-persona',
    component: AddPersonaComponent,
  },
  {
    path: 'personas/search-persona',
    component: SearchPersonaComponent,
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('../doctor/bitacora/bitacora.module').then(
        (m) => m.BitacoraModule
      ),
    data: {
      embebedView: false,
      breadcrumb: {
        title: 'Mis bitacoras',
      },
    },
  },
  {
    path: 'room',
    loadChildren: () =>
      import('../admin/situacion/situacion.module').then(
        (m) => m.SituacionModule
      ),
    data: {
      embebedView: false,
      breadcrumb: {
        title: 'Mis Situaciones',
      },
    },
  },
  {
    path: 'usuarios/all-usuarios',
    component: AllUsuariosComponent,
  },
  {
    path: 'usuarios/add-usuario',
    component: AddUsuarioComponent,
  },
  {
    path: 'achievement',
    component: AchievementComponent,
    data: {
      breadcrumb: {
        title: 'Mis logros',
      },
    },
  },
  {
    path: 'maternal-kit',
    component: MaternalKitComponent,
    data:{
      breadcrumb: {
        title: 'Kit materno',
      },
    }
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
