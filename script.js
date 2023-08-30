var Input_value, Expenses, Earnings, Balance, number;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

// Describe this function...
function EarningsMethod() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total_earnings = document.getElementById('total_earnings');
  element_total_earnings.innerText = Earnings.reduce((a,b) => a+b, 0);
  let element_earning_list = document.getElementById('earning_list');
  element_earning_list.replaceChildren();
  Earnings.forEach((number) => {
    let new_li = document.createElement('li');
    new_li.innerText = number;

    element_earning_list.appendChild(new_li);
  });
}

// Describe this function...
function ExpensesMethod() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total_expenses = document.getElementById('total_expenses');
  element_total_expenses.innerText = Expenses.reduce((a,b) => a+b, 0);
  let element_expenses_list = document.getElementById('expenses_list');
  element_expenses_list.replaceChildren();
  Expenses.forEach((number) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = number;

    element_expenses_list.appendChild(new_li2);
  });
}


Input_value = 0;
Expenses = [];
Earnings = [];
Balance = [];


document.getElementById('Enter').addEventListener('click', (event) => {
  Input_value = convertToNumber(document.getElementById('input_bar').value);
  Balance.push(Input_value);
  if (Input_value < 0) {
    Expenses.push(Input_value);
    ExpensesMethod();
  } else {
    Earnings.push(Input_value);
    EarningsMethod();
  }
  let element_total = document.getElementById('total');
  element_total.innerText = Balance.reduce((a,b) => a+b, 0);

});