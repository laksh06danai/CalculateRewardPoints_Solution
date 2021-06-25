import { ITransaction } from "../Interface/ITransaction";
import { calculateRewards } from "../utility/Utility-helper";

class Transaction implements ITransaction {
  price: number;
  rewards: number;
  transactionDate: Date;
  constructor(price: number) {
    this.price = price;
    this.rewards = calculateRewards(price);
    this.transactionDate = new Date();
  }
}
export default Transaction;
