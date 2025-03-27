import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

export const routes: Routes = [
  {
    // para que la ruta sea la pagina principal, el path lo podemos dejar en blanco
    path: '',
    component: HomeComponent,
  },
  {
    path: 'labs',
    component: LabsComponent,
  },
];
