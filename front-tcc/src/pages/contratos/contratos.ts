import { ContratosDetalhesPage } from './../contratos-detalhes/contratos-detalhes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractModel } from '../../models/contractmodel';
import { Contract } from '../../models/contractclass';
/**
 * Generated class for the ContratosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contratos',
  templateUrl: 'contratos.html'
})
export class ContratosPage {
  contracts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.populateContracts();
  }

  goToContrato(id) {
    let contract = this.contracts[id];
    this.navCtrl.push(ContratosDetalhesPage, { contract: contract });
  }
  populateContracts() {
    let contractGenerator = new Contract();

    this.contracts = contractGenerator.generateContracts(1, 10);
  }
}
