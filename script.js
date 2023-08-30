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
  let element_total1 = document.getElementById('total1');
  element_total1.innerText = Balance.reduce((a,b) => a+b, 0);

});
var dice, rolls, sum, item;

// Describe this function...
function showtotal() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
}

// Describe this function...
function showrolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let element_list2 = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list2.appendChild(new_li);
  });
}

// Describe this function...
function showinfo() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  showrolls();
  showtotal();
  showresult();
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function showresult() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (rolls.reduce((a,b) => a+b, 0) == sum) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'you won!!';
    element_info.style.color = '#009900';
  } else if (rolls.reduce((a,b) => a+b, 0) < sum) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'keep going!!';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'you lost!';
    element_info3.style.color = '#ff0000';
  }
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];
sum = 11;
showinfo();


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  showinfo();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  showinfo();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = '0';
  let element_info4 = document.getElementById('info');
  element_info4.innerText = 'Keep playing!';

});
function convertToNumber(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return 0
    } else {
      return number_value
    }
  }
  
  
  
  document.getElementById('comment').addEventListener('click', (event) => {
    let element_li = document.getElementById('li');
    let new_li = document.createElement('li');
    new_li.innerText = document.getElementById('text').value;
  
    element_li.appendChild(new_li);
  
  });