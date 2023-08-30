let element_Photos = document.getElementById('Photos');
element_Photos.innerText = 'photos';

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
}var images;


images = ['https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80', 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1461&q=80', 'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80', 'https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', 'https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80', 'https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80', 'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'];


document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.slice(-1)[0]);
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images.shift());

});

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



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('text').value;

  element_list.appendChild(new_li);

});
