import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'sobre-nosotros', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'servicios', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'informacion-legal', loadComponent: () => import('./pages/legal-info/legal-info.component').then(m => m.LegalInfoComponent) },
  { path: 'requisitos', loadComponent: () => import('./pages/requirements/requirements.component').then(m => m.RequirementsComponent) },
  { path: 'horarios-ubicacion', loadComponent: () => import('./pages/hours-location/hours-location.component').then(m => m.HoursLocationComponent) },
  { path: 'recursos', loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent) },
  { path: 'contacto', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
];
