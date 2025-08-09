
const transaction = [];
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

    //creating an empy transactions array to store captured input
    const newTransaction = {
        id: Date.now(),
        date: transactionDate,
        type: transactionType,
        description: transactionDescription,
        amount:  Number(transactionAmount)
    };
    transaction.push(newTransaction)
    //add new object(transaction object to the transaction arr)
    displayTransaction(transaction)
});
//_______________________________________displayFuction________________________//
function displayTransaction(transaction){
    const ul = document.getElementById('list');
    ul.innerHTML = '';
    
    transaction.forEach((transaction) => {
        const li = document.createElement('li');
        const editbutton = document.createElement('button');
        editbutton.innerText = 'edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'delete';
        li.innerText = `${transaction.date} - ${transaction.type} - ${transaction.description} - Ksh.${transaction.amount}`;
        ul.appendChild(li);
        li.appendChild(editbutton);
        li.appendChild(deleteBtn);
        // console.log(li);
    });
};
//calculating balance, expenses, and income
// transactionSums = () => {
//     const 
// }


