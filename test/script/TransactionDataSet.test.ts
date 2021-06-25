import TransactionDataSet from '../../src/script/TransactionDataSet';

jest.mock('../../src/script/TransactionDataSet'); // TransactionDataSet is now a mock constructor


it('TransactionDataSet class should called with constructor constructor', () => {
  const transactionObj = new TransactionDataSet();
  expect(TransactionDataSet).toHaveBeenCalledTimes(1);
});