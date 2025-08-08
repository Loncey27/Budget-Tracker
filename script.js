
const transactions = [];
const form = document.getElementById('form');
form.addEventListener('submit', function captureEntries(event){
  //prevent page reloading  
    event.preventDefault() 

    const transactionDate = document.getElementById('transaction-date').value;
    const transactionType = document.getElementById('add-transaction-type').value;
    const transactionDescription = document.getElementById('transaction-description').value;
    const transactionAmount = document.getElementById('transaction-amount').value;
    /*console.log(transactionDate)
    console.log(transactionType)
    console.log(transactionDescription)
    console.log(transactionAmount)*/

    const newTransaction = {
        date: transactionDate,
        type: transactionType,
        description: transactionDescription,
        amount:  Number(transactionAmount)
    };
});

displayTransactions = () => {
    const transactionsList = document.getElementById('transactions-list');

}


