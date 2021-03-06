import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/list/list.component';

import { InformationGuard } from './guards/information.guard';
import { InformationComponent } from './views/information/information.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':number',
    component: InformationComponent,
    canActivate: [InformationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
