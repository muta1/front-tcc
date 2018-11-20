export interface ContractModel {
  id: number;
  contractId: string;
  sellerid: number;
  buyerid: number;
  product: string;
  price: number;
  buyerInitialPrice: number;
  sellerInitialPrice: number;
  storageLocation: string;
  umidity: number;
  type: string;
  deliverDate: string;
  deadline: string;
  ruralBackground: string;
  status: string;
}
