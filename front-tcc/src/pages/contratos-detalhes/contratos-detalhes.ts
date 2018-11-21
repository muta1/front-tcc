import { BlocosAnterioresPage } from './../blocos-anteriores/blocos-anteriores';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContratosDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contratos-detalhes',
  templateUrl: 'contratos-detalhes.html'
})
export class ContratosDetalhesPage {
  contract: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contract = this.navParams.get('contract');
  }
  goToBlocosAnteriores() {
    this.navCtrl.push(BlocosAnterioresPage, { contract: this.contract });
  }
}
