import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


// tempral

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// ng2-charts

import { ChartsModule } from 'ng2-charts';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [

	    DashboardComponent,
	    ProgressComponent,
    	Graficas1Component,
    	PagesComponent,
      IncrementadorComponent,
      GraficoDonaComponent,
      AccountSettingsComponent,
      PromesasComponent,
      RxjsComponent,
      ProfileComponent

  ],
  exports: [
	    DashboardComponent,
	    ProgressComponent,
    	Graficas1Component
  ],
  imports: [
      CommonModule,
  		SharedModule,
  		PAGES_ROUTES,
      FormsModule,
      ChartsModule,
      PipesModule
  ]
})
export class PagesModule { }