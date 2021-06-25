# Calculate Rewards

This application will provide the functionality to calculate the reward points based on the amount spent and follows the below logic :-
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
## Tech stack
- Typescript with OOPS Concept
- Jest for testing the functions

## Brief about the Project
In this app, there are two classes ```Transaction``` and ```TransactionDataSet```. which implements two interfaces to set the transaction and provide the record list to user Interfaces
- ITransaction
- ITransactionDataList

Transaction class implements ITransaction interface and responsible to set the transaction data values and TransactionDataList Implements ITransactionDataList interface and responsible to create a data set of all the transactions with respect to transaction date
## Project setup
```
npm install
```

### Compile to typescript
```
npm run build
```

### Run tests
```
npm test
```

## Sample code to test the functionality
ITransactionDataList has below methods to expose
```getLastThreeMonthsRecords```
```getAllRecords```
```addTransaction```
```getTotalRewards```
```rewardPerMonth```
Create an object of TransactionDataSet class and call the add transaction method with price value.
```
let myTransactionList = new TransactionDataSet();
myTransactionList.addTransaction(154);
myTransactionList.addTransaction(54);
myTransactionList.addTransaction(200);
myTransactionList.addTransaction(20);
myTransactionList.addTransaction(300);
console.log(myTransactionList.getAllRecords());
```
