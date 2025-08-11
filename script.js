const transaction = [];
const form = document.getElementById("form");
form.addEventListener("submit", function captureEntries(event) {
  event.preventDefault(); //prevent page reloading
  const transactionDate = document.getElementById("transaction-date").value;
  const transactionType = document.getElementById("add-transaction-type").value;
  const transactionDescription = document.getElementById(
    "transaction-description"
  ).value;
  const transactionAmount = document.getElementById("transaction-amount").value;
  //creating an empy transactions array to store captured input
  const newTransaction = {
    id: Date.now(),
    date: transactionDate,
    type: transactionType,
    description: transactionDescription,
    amount: Number(transactionAmount),
  };
  transaction.push(newTransaction); //add new object(transaction object to the transaction arr)
  displayTransaction(transaction);
  dashSummary(transaction);
  form.reset();
});
//_______________________________________displayFuction__________________________________________________
function displayTransaction(transactionsToDisplay) {
  const ul = document.getElementById("list");
  ul.innerHTML = "";
  transactionsToDisplay.forEach((singleTransaction, index) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    li.innerText = `${singleTransaction.date} - ${singleTransaction.type} - ${singleTransaction.description} - Ksh.${singleTransaction.amount}`;
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    //removing parent
    deleteBtn.addEventListener("click", function (event) {
      transaction.splice(index, 1);
      displayTransaction(transaction);
      dashSummary(transaction);
    });
  });
}
//calculating balance, expenses, and income
const dashIncome = document.querySelector(".income-dash p");
const dashExpenses = document.querySelector(".expense-dash p");
const dashBalance = document.querySelector(".balance-dash p");

function dashSummary(transactionToAdd) {
  let totalIncome = 0;
  let totalExpenses = 0;

  transactionToAdd.forEach((transaction) => {
    if (transaction.type === "income") {
      totalIncome += transaction.amount;
    } else {
      totalExpenses += transaction.amount;
    }
  });
  const balance = totalIncome - totalExpenses;
  dashIncome.innerText = `Ksh ${totalIncome}`;
  dashExpenses.innerText = `Ksh ${totalExpenses}`;
  dashBalance.innerText = `Ksh ${balance}`;
}
// transaction filter
const transactionType = document.getElementById("transaction-type");
function filterTransactions() {
  const selectedFilter = transactionType.value;
  if (selectedFilter === "all") {
    return transaction;
  } else if (selectedFilter === "income") {
    return transaction.filter(function isIncome(value) {
      return value.type === "income";
    });
  } else if (selectedFilter === "expense") {
    return transaction.filter(function isExpense(value) {
      return value.type === "expense";
    });
  }
}
transactionType.addEventListener("change", function () {
  const filteredList = filterTransactions();
  displayTransaction(filteredList);
  dashSummary(filteredList);
});
