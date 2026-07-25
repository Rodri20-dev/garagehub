import { Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/layout/main-layout/main-layout';

export const routes: Routes = [
  {
  path: '',
  component: MainLayoutComponent,
  children: [

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },

    {
      path: 'dashboard',
      loadComponent: () =>
        import('./features/dashboard/dashboard')
          .then(c => c.DashboardComponent)
    },

    {
      path: 'garage',
      loadComponent: () =>
        import('./features/garage/garage')
          .then(c => c.GarageComponent)
    },

    {
      path: 'garage/:id',
      loadComponent: () =>
        import('./features/garage/pages/vehicle-details/vehicle-details')
          .then(c => c.VehicleDetailsComponent)
    },

    {
      path: 'fuel',
      loadComponent: () =>
        import('./features/fuel/fuel')
          .then(c => c.FuelComponent)
    },

    {
      path: 'maintenance',
      loadComponent: () =>
        import('./features/maintenance/maintenance')
          .then(c => c.MaintenanceComponent)
    },

    {
      path: 'expenses',
      loadComponent: () =>
        import('./features/expenses/expenses')
          .then(c => c.ExpensesComponent)
    },

    {
      path: 'settings',
      loadComponent: () =>
        import('./features/settings/settings')
          .then(c => c.SettingsComponent)
    },

    

  ]
}
];