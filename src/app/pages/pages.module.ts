import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { CreateJrfComponent } from './createJRF/create-jrf/create-jrf.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PortalModule } from '@angular/cdk/portal';
import { NgxPrintModule } from 'ngx-print';
import { CandidateApplicationComponent } from './candidate-application/candidate-application.component';

@NgModule({
  declarations: [LoginComponent, CreateJrfComponent, CandidateApplicationComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    PortalModule,
    NgxPrintModule
  ],
})
export class PagesModule {}
