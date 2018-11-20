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
  public contract: ContractModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratosPage');
  }
}
