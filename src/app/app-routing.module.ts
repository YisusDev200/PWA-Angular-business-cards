import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusinessCardInfo } from './info';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  {
    path: 'tarjeta', component: BusinessCardInfo
  },
  {
    path: 'nuevo', component: NuevoComponent
  },
  {
    path:'',
    redirectTo: '/tarjeta?id=4',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: '/tarjeta?id=4',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
