let x = document.getElementById("number");
let count = parseInt(x.innerHTML);

const button_sub = document.getElementById("sub");
const button_add = document.getElementById("add");
const button_reset = document.getElementById("reset");

button_sub.onclick = function() { sub() };
button_add.onclick = function() { add() };
button_reset.onclick = function() { reset() };

function sub() {
    count--;
    x.textContent = count;
}

function add() {
    count++;
    x.textContent = count;
}

function reset() {
    count = 0;
    x.textContent = count;
}