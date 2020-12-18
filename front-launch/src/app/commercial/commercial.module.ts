import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { IndexCommercialComponent } from './pages/index-commercial/index-commercial.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    IndexCommercialComponent,
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    SharedModule
  ],
})
export class CommercialModule { }
