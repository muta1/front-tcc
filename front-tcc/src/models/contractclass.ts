import { ContractModel } from './contractmodel';
import { Md5 } from 'ts-md5/dist/md5';
import * as moment from 'moment';
export class Contract {
  private products = ['x', 'milho', 'soja'];
  private cidades = [
    'x',
    'Uberaba-MG',
    'Uberlândia-MG',
    'Araguari-MG',
    'Araxa-MG',
    'Naque-MG'
  ];
  private types = ['x', 'CIF', 'FOB'];
  private status = ['x', 'Validado', 'Aguardando validação', 'Rejeitado'];
  private prices = [];
  private pricesBuyer = [];
  private pricesSeller = [];
  private contracts: ContractModel[] = [];
  constructor() {
    moment.locale('pt-br');
    let num = 20;
    for (let i = 1; i <= 40; i++) {
      num++;
      this.prices.push(
        Number.parseFloat(
          (Math.floor(Math.random() * 30) + 20)
            .toString()
            .concat('.')
            .concat(i.toString())
        ).toFixed(2)
      );
      this.pricesBuyer.push(
        Number.parseFloat(
          (Math.floor(Math.random() * 30) + 20)
            .toString()
            .concat('.')
            .concat(i.toString())
        ).toFixed(2)
      );
      this.pricesSeller.push(
        Number.parseFloat(
          (Math.floor(Math.random() * 30) + 20)
            .toString()
            .concat('.')
            .concat(i.toString())
        ).toFixed(2)
      );
    }
  }

  generateContracts(starts: number, ends: number): ContractModel[] {
    for (let i = starts; i <= ends; i++) {
      let contractAux: ContractModel = {
        buyerInitialPrice: this.pricesBuyer[Math.floor(Math.random() * 30) + 1],
        buyerid: 1,
        sellerid: Math.floor(Math.random() * 10) + 2,
        contractId: Md5.hashStr(
          (Math.floor(Math.random() * 1000) + 1).toString()
        ).toString(),
        deadline: moment()
          .add(i, 'M')
          .format('DD-MM-YYYY')
          .toString(),
        deliverDate: moment()
          .add(i, 'M')
          .format('DD-MM-YYYY')
          .toString(),
        id: i,
        price: this.prices[Math.floor(Math.random() * 30) + 1],
        product: this.products[Math.floor(Math.random() * 2) + 1],
        ruralBackground:
          Math.floor(Math.random() * 2) + 1 == 1 ? 'Incluso' : 'Não incluso',
        sellerInitialPrice: this.pricesSeller[
          Math.floor(Math.random() * 30) + 1
        ],
        storageLocation: this.cidades[Math.floor(Math.random() * 5) + 1],
        type: this.types[Math.floor(Math.random() * 2) + 1],
        umidity: Math.floor(Math.random() * 20) + 10,
        status: this.status[Math.floor(Math.random() * 3) + 1]
      };
      this.contracts.push(contractAux);
    }
    return this.contracts;
  }
}
