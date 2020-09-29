import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'patients1',
  //   loadChildren: () => import('./patients1/patients1.module').then( m => m.Patients1PageModule)
  // },
  // {
  //   path: 'patients',
  //   loadChildren: () => import('./patients/patients.module').then( m => m.PatientsPageModule)
  // },
  // {
  //   path: 'patient-profile',
  //   loadChildren: () => import('./patient-profile/patient-profile.module').then( m => m.PatientProfilePageModule)
  // },
  // {
  //   path: 'patient-comments',
  //   loadChildren: () => import('./patient-comments/patient-comments.module').then( m => m.PatientCommentsPageModule)
  // },
  // {
  //   path: 'temperatures',
  //   loadChildren: () => import('./temperatures/temperatures.module').then( m => m.TemperaturesPageModule)
  // },
  // {
  //   path: 'cholesterols',
  //   loadChildren: () => import('./cholesterols/cholesterols.module').then( m => m.CholesterolsPageModule)
  // },
  // {
  //   path: 'blood-pressures',
  //   loadChildren: () => import('./blood-pressures/blood-pressures.module').then( m => m.BloodPressuresPageModule)
  // },
  // {
  //   path: 'respirations',
  //   loadChildren: () => import('./respirations/respirations.module').then( m => m.RespirationsPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
