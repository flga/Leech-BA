import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { QueueComponent } from './queue/queue.component';
import { MgwQueueComponent } from './mgwqueue/mgw.queue.component';
import { CustomReuseStrategy } from './routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplitsComponent } from './splits/splits.component';
import { LegacyCalculatorComponent } from './legacy-calculator/legacy-calculator.component';
import { InformationComponent } from './information/information.component';
import { LeechingGuideComponent } from './leeching-guide/leeching-guide.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'splits', component: SplitsComponent },
  { path: 'info', component: InformationComponent },
  { path: 'howtoleech', component: LeechingGuideComponent },
  { path: 'calculator', component: LegacyCalculatorComponent },
  { path: 'calculator3', component: CalcComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'mgwqueue', component: MgwQueueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: false })],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ]
})
export class AppRoutingModule { }
