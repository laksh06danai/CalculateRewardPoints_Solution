import { SORT_TYPE } from "../constants/Enums";
import { ITransaction } from "../Interface/ITransaction";

export const calculateRewards = (price: number) => {
  if (price >= 50 && price < 100) {
    return price - 50;
  } else if (price > 100) {
    return 2 * (price - 100) + 50;
  }
  return 0;
};
export const getThreeMonthDate = (currentDate:Date=new Date()) => {
  return new Date(currentDate.setMonth(currentDate.getMonth() - 3));
};
export const sortData = (
  fieldName: string,
  actualList: Array<ITransaction>,
  type: SORT_TYPE
) => {
  if (fieldName === "transactionDate") {
    return actualList.sort((a, b) =>
      type === SORT_TYPE.DESCENDING
        ? b.transactionDate.getTime() > a.transactionDate.getTime()
          ? -1
          : 1
        : b.transactionDate.getTime() < a.transactionDate.getTime()
        ? 1
        : -1
    );
  } else if (fieldName === "price") {
    return actualList.sort((a, b) =>
      type === SORT_TYPE.DESCENDING ? b.price - a.price : a.price - b.price
    );
  } else if (fieldName === "rewards") {
    return actualList.sort((a, b) =>
      type === SORT_TYPE.DESCENDING
        ? b.rewards - a.rewards
        : a.rewards - b.rewards
    );
  }
  return actualList;
};
