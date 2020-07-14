import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosModalPage } from './dados-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DadosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosModalPageRoutingModule {}
