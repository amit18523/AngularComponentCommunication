import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from './shared/constants/routing.constant';

const routes: Routes = [
  { 
    path: "", 
    redirectTo: ROUTING.VENDOR, 
    pathMatch: "full" 
  },
  {
    path: ROUTING.VENDOR, 
    loadChildren: () => import('./modules/vendor/vendor.module').then(m => m.VendorModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
