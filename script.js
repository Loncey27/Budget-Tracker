const transaction = [];
const form = document.getElementById("form");
form.addEventListener("submit", function captureEntries(event) {
  //prevent page reloading
  event.preventDefault();

  const transactionDate = document.getElementById("transaction-date").value;
  const transactionType = document.getElementById("add-transaction-type").value;
  const transactionDescription = document.getElementById(
    "transaction-description"
  ).value;
  const transactionAmount = document.getElementById("transaction-amount").value;
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
    amount: Number(transactionAmount),
  };
  transaction.push(newTransaction);
  //add new object(transaction object to the transaction arr)
  displayTransaction(transaction);
  dashSummary();
});
//_______________________________________displayFuction________________________//
function displayTransaction(transaction) {
  const ul = document.getElementById("list");
  ul.innerHTML = "";

  transaction.forEach((transaction) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    li.innerText = `${transaction.date} - ${transaction.type} - ${transaction.description} - Ksh.${transaction.amount}`;
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    // console.log(li);

    //removing parent
    deleteBtn.addEventListener('click', function(event) {
    event.target.parentElement.remove();
    });
  });
}
//calculating balance, expenses, and income
const dashIncome = document.querySelector(".income-dash p");
const dashExpenses = document.querySelector(".expense-dash p");
const dashBalance = document.querySelector(".balance-dash p");

function dashSummary() {
  let totalIncome = 0;
  let totalExpenses = 0;

  transaction.forEach((transaction) => {
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
//delete bu
