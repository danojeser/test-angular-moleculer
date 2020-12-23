import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminIndexComponent } from './pages/admin-index/admin-index.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';

const routes: Routes = [
  {
    path: '',
    component: MainAdminComponent,
    children: [
      {
        path: '',
        component: AdminIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
