import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminIndexComponent } from './pages/admin-index/admin-index.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LateralMenuComponent } from './shared/lateral-menu/lateral-menu.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';


@NgModule({
  declarations: [AdminIndexComponent, HeaderComponent, FooterComponent, LateralMenuComponent, MainAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
