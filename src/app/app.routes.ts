import { Routes } from '@angular/router';
import { MainLayout } from './layout/components/main-layout/main-layout';
import { Login } from './features/login/login';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
    path: '',
    component: MainLayout, // Father
    children: [
      { path: 'dashboard', component: Dashboard }
    ],
  },

  { path: 'login', component: Login }
];
