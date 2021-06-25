import Transaction from '../../src/script/Transaction';

jest.mock('../../src/script/Transaction'); // Transaction is now a mock constructor


it('Transaction class should called with constructor constructor', () => {
  const transactionObj = new Transaction(60);
  expect(Transaction).toHaveBeenCalledTimes(1);
});