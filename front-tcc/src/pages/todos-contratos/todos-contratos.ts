import { Contract } from './../../models/contractclass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodosContratosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos-contratos',
  templateUrl: 'todos-contratos.html'
})
export class TodosContratosPage {
  contracts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.populateContracts();
  }

  populateContracts() {
    let contractGenerator = new Contract();

    this.contracts = contractGenerator.generateContracts(1, 100);
  }
}
