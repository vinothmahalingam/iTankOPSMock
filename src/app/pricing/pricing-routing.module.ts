import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaterequestComponent } from './raterequest/raterequest.component';

const routes: Routes = [
  {
    path: 'raterequest',
    component: RaterequestComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
