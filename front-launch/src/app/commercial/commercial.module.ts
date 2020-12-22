import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { IndexCommercialComponent } from './pages/index-commercial/index-commercial.component';
import { SharedModule } from './shared/shared.module';
import { MainCommercialComponent } from './main-commercial/main-commercial.component';
import { DoctorsCommercialComponent } from './pages/doctors-commercial/doctors-commercial.component';
import { StoriesCommercialComponent } from './pages/stories-commercial/stories-commercial.component';


@NgModule({
  declarations: [
    IndexCommercialComponent,
    MainCommercialComponent,
    DoctorsCommercialComponent,
    StoriesCommercialComponent,
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    SharedModule
  ],
})
export class CommercialModule { }
