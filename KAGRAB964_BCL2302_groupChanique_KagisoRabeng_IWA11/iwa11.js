
const order1 = document.querySelector('[data-key="order1"]');
const order1biscuits = order1.querySelector('.biscuits .count');
const order1donuts = order1.querySelector("donuts .count");
const order1pancakes = order1.querySelector("pancakes .count");
const order1status = order1.querySelector(".status dd");

const order2 = document.querySelector('[data-key="order2"]');
const order2biscuits = order2.querySelector(".biscuits .count");
const order2donuts = order2.querySelector(".donuts .count");
const order2pancakes = order2.querySelector(".pancakes .count");
const order2status = order2.querySelector(".status dd");

const order3 = document.querySelector('[data-key="order3"]');
const order3biscuits = order3.querySelector(".biscuits .count");
const order3donuts = order3.querySelector(".donuts .count");
const order3pancakes = order3.querySelector(".pancakes .count");
const order3status = order3.querySelector(".status dd");

biscuits1.innerText = order1.dataset.biscuits
donuts1.innerText = order1.dataset.donuts 
pancakes1.innerText = order1.dataset.pancakes
status1.innerText = order1.status = order1.status ? Delivered : Pending

biscuits2.innerText = order2.dataset.biscuits
donuts2.innerText = order2.dataset.donuts 
pancakes2.innerText = order2.dataset.pancakes
status2.innerText = order2.status = order2.status ? Delivered : Pending

biscuits3.innerText = order3.dataset.biscuits
donuts3.innerText = order3.dataset.donuts
pancakes3.innerText = order3.dataset.pancakes
status3.innerText = order3.status = order3.status ? Delivered : Pending 