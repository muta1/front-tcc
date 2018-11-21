import { Contract } from './../../models/contractclass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlocosAnterioresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blocos-anteriores',
  templateUrl: 'blocos-anteriores.html'
})
export class BlocosAnterioresPage {
  contract: any;
  contracts: any;
  contract1: any;
  contract2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contract = this.navParams.get('contract');

    this.populateContracts();
  }

  populateContracts() {
    let contractGenerator = new Contract();
    this.contracts = contractGenerator.generateContracts(1, 3);
    console.log(this.contracts);

    this.contract1 = this.contracts[1];
    this.contract2 = this.contracts[2];

    console.log('contract1:', this.contract1);
    console.log('contract2:', this.contract2);
  }
}
