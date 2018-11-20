import { ContratosDetalhesPage } from './../contratos-detalhes/contratos-detalhes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractModel } from '../../models/contractmodel';
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
    this.contracts = [
      {
        id: 1,
        contractId: 'Anskbsdnmfbsdhdfgsdfb',
        sellerid: 1,
        buyerid: 2,
        product: 'milho',
        price: 35.55,
        buyerInitialPrice: 34.5,
        sellerInitialPrice: 36.52,
        storageLocation: 'Uberaba',
        umidity: 14,
        type: 'CIF',
        deliverDate: '10/12/2018',
        deadline: '15/12/2018',
        ruralBackground: 'true'
      },
      {
        id: 2,
        contractId: 'asndmvbsjetb4ih',
        sellerid: 3,
        buyerid: 2,
        product: 'milho',
        price: 35.3,
        buyerInitialPrice: 34.5,
        sellerInitialPrice: 36,
        storageLocation: 'Uberaba',
        umidity: 14,
        type: 'CIF',
        deliverDate: '10/12/2018',
        deadline: '15/12/2018',
        ruralBackground: 'true'
      },
      {
        id: 3,
        contractId: 'vkBEFKHCASHFVsdsbd',
        sellerid: 4,
        buyerid: 2,
        product: 'milho',
        price: 35,
        buyerInitialPrice: 34.5,
        sellerInitialPrice: 35.5,
        storageLocation: 'Uberaba',
        umidity: 14,
        type: 'CIF',
        deliverDate: '10/12/2018',
        deadline: '15/12/2018',
        ruralBackground: 'true'
      },
      {
        id: 4,
        contractId: 'SadvaHSDVnadvAHA',
        sellerid: 5,
        buyerid: 2,
        product: 'soja',
        price: 85.0,
        buyerInitialPrice: 84.0,
        sellerInitialPrice: 85.0,
        storageLocation: 'Uberaba',
        umidity: 13,
        type: 'CIF',
        deliverDate: '10/12/2018',
        deadline: '15/12/2018',
        ruralBackground: 'true'
      },
      {
        id: 5,
        contractId: 'knxjjansnCJDBCBDJjBS',
        sellerid: 5,
        buyerid: 2,
        product: 'soja',
        price: 85.5,
        buyerInitialPrice: 84.0,
        sellerInitialPrice: 87.0,
        storageLocation: 'Uberaba',
        umidity: 14,
        type: 'CIF',
        deliverDate: '10/12/2018',
        deadline: '15/12/2018',
        ruralBackground: 'true'
      },
      {
        id: 6,
        contractId: 'sdv4sa4vsadsadsdsa',
        sellerid: 5,
        buyerid: 2,
        product: 'soja',
        price: 85.5,
        buyerInitialPrice: 84.0,
        sellerInitialPrice: 86.8,
        storageLocation: 'Uberaba',
        umidity: 14,
        type: 'CIF',
        deliverDate: '10/12/2018',
        deadline: '15/12/2018',
        ruralBackground: 'true'
      }
    ];
  }
}
