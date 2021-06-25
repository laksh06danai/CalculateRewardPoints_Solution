import { SORT_TYPE } from "../../src/constants/Enums";
import {calculateRewards,getThreeMonthDate,sortData} from "../../src/utility/Utility-helper"
import { actualTransactionList } from "./testData";

describe("Utility-helper test suites", () => {
  test("Should return the rewards point if price is greater than or equal to 50 and price less than 100 ", async () => {
    const price = 70;
    expect(calculateRewards(price)).toBe(20);
  });
  test("Should return the rewards point if price is greater than 100 ", async () => {
    const price = 120;
    expect(calculateRewards(price)).toBe(90);
  });
  test("Should return  point zero if price is less than 100 and less than 50 ", async () => {
    const price = 20;
    expect(calculateRewards(price)).toBe(0);
  });
  test("Should return three month back date", async () => {
    const testDate = "Fri Jun 25 2021 20:57:39 GMT+0530 (India Standard Time)";
    const expectedDate =
      "Thu Mar 25 2021 20:57:39 GMT+0530 (India Standard Time)";
    expect(getThreeMonthDate(new Date(testDate)).toString()).toContain(expectedDate);
  });
  test("Should return the sorted array in desending order for transaction data", async () => {
    expect(sortData("transactionDate",actualTransactionList,SORT_TYPE.DESCENDING)).toHaveLength(5);
    expect(sortData("transactionDate",actualTransactionList,SORT_TYPE.DESCENDING)[0].price).toBe(200);
    expect(sortData("transactionDate",actualTransactionList,SORT_TYPE.DESCENDING)[1].price).toBe(300);
    expect(sortData("transactionDate",actualTransactionList,SORT_TYPE.DESCENDING)[2].price).toBe(20);
    expect(sortData("transactionDate",actualTransactionList,SORT_TYPE.DESCENDING)[3].price).toBe(54);
    expect(sortData("transactionDate",actualTransactionList,SORT_TYPE.DESCENDING)[4].price).toBe(120);
  });
});

