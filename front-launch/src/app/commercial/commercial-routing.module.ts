import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexCommercialComponent } from './pages/index-commercial/index-commercial.component';

const routes: Routes = [
  {
    path: '',
    component: IndexCommercialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
