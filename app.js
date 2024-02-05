// p1
var pri1 = 133

p1 = document.querySelector(`#p1`);


p1.addEventListener("click", function () {
  document.querySelector(`#c1`).style.display = `flex`;
  //  var pri1 = 1;
});

// p2

p2 = document.querySelector(`#p2`);

let pri2

p2.addEventListener("click", function () {
  document.querySelector(`#c2`).style.display = `flex`;
//  pri2 = 1;
});

// p3

p3 = document.querySelector(`#p3`);
let pri3 = 0;

p3.addEventListener("click", function () {
  document.querySelector(`#c3`).style.display = `flex`;
  //  pri3 = 1;
});

// p4

p4 = document.querySelector(`#p4`);
let pri4 = 0;

p4.addEventListener("click", function () {
  document.querySelector(`#c4`).style.display = `flex`;
  // pri4 = 1;
});

// p5

p5 = document.querySelector(`#p5`);
let pri5 = 0;

p5.addEventListener("click", function () {
  document.querySelector(`#c5`).style.display = `flex`;
  
  // pri5 = 1;
});

// p6

p6 = document.querySelector(`#p6`);

let pri6 = 0;

p6.addEventListener("click", function () {
  document.querySelector(`#c6`).style.display = `flex`;
  //  pri6 = 1;
});

// let totalPrice = `${pri1}` + `${pri1}` +`${pri1}` +`${pri1}` + `${pri1}` + `${pri1}`;

document.querySelector(`.tprice`).innerHTML = `<p class="tprice">${totalPrice} TK</p>`;

console.log(totalPrice);
console.log(pri1);







cl1 = document.querySelector(`#cl1`);
cl1.addEventListener("click", function () {
  alert(`haa`)
  // document.querySelector(`#c1`).style.display = `hidden`;
});
