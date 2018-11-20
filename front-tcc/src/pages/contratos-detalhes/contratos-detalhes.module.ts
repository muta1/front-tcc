import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratosDetalhesPage } from './contratos-detalhes';

@NgModule({
  declarations: [
    ContratosDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(ContratosDetalhesPage),
  ],
})
export class ContratosDetalhesPageModule {}
