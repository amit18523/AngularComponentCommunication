import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from '../../shared/constants/routing.constant';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
  { path: "", redirectTo: ROUTING.ALL, pathMatch: "full" },
  { path: ROUTING.ALL, component: VendorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
