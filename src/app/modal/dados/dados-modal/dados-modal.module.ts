import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosModalPageRoutingModule } from './dados-modal-routing.module';

import { DadosModalPage } from './dados-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosModalPageRoutingModule
  ],
  declarations: [DadosModalPage]
})
export class DadosModalPageModule {}
