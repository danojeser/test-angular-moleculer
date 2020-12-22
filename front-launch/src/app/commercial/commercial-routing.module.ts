import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCommercialComponent } from './main-commercial/main-commercial.component';
import { DoctorsCommercialComponent } from './pages/doctors-commercial/doctors-commercial.component';
import { IndexCommercialComponent } from './pages/index-commercial/index-commercial.component';
import { StoriesCommercialComponent } from './pages/stories-commercial/stories-commercial.component';

const routes: Routes = [
  {
    path: '',
    component: MainCommercialComponent,
    children: [
      {
        path: '',
        component: IndexCommercialComponent
      },
      {
        path: 'doctors',
        component: DoctorsCommercialComponent
      },
      {
        path: 'stories',
        component: StoriesCommercialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
