import { month } from "../constants/constant";
import { SORT_TYPE } from "../constants/Enums";
import { ITransaction } from "../Interface/ITransaction";
import { ITransactionList } from "../Interface/ITransactionList";
import { getThreeMonthDate, sortData } from "../utility/Utility-helper";
import Transaction from "./Transaction";

export default class TransactionDataSet implements ITransactionList {
  transactionList: Array<ITransaction>;
  constructor() {
    this.transactionList = [];
  }
  getLastThreeMonthsRecords = (): ITransaction[] => {
    let filteredList = this.transactionList.filter(
      (trans) => trans.transactionDate > getThreeMonthDate()
    );
    return sortData("transactionDate", filteredList, SORT_TYPE.DESCENDING);
  };
  getAllRecords = (): ITransaction[] => {
    return sortData(
      "transactionDate",
      this.transactionList,
      SORT_TYPE.DESCENDING
    );
  };

  addTransaction(price: number) {
    this.transactionList.push(new Transaction(price));
  }

  getTotalRewards = (): number => {
    return this.transactionList.length
      ? this.transactionList.reduce((acc, key) => key.rewards + acc, 0)
      : 0;
  };

  rewardPerMonth() {
    const rewards = [];
    for (let i = 0; i < month; i++) {
      let filteredList = this.transactionList.filter(
        (trans) => trans.transactionDate.getMonth() == new Date().getMonth() - i
      );
      rewards[i] = filteredList.reduce((acc, key) => key.rewards + acc, 0);
    }
    return rewards;
  }
}
