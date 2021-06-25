import { ITransaction } from "./ITransaction";

export interface ITransactionList {
  transactionList: Array<ITransaction>;
  getLastThreeMonthsRecords: () => Array<ITransaction>;
  getAllRecords: () => Array<ITransaction>;
  addTransaction: (price: number) => void;
  getTotalRewards: () => number;
  rewardPerMonth: () => Array<number>;
}
