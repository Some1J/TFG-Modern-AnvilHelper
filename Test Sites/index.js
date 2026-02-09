
//Constants
const r1 = document.getElementById("r1")
const r2 = document.getElementById("r2")
const r3 = document.getElementById("r3")
const r4 = document.getElementById("r4")
const g1 = document.getElementById("g1")
const g2 = document.getElementById("g2")
const g3 = document.getElementById("g3")
const g4 = document.getElementById("g4")

const p1 = document.getElementById("p1")

const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

const calculation = document.getElementById("calculation")

let history = [0];

//Display
let final = Number(0)

calculation.textContent = final;

function add(){
    history.push(final)
    console.log(final, history, typeof history)
}

function undo(){
    if (history.length <=1) return;
    history.pop();

    const lastHistory = history[history.length - 1];
    final = lastHistory;
    console.log(final, history, typeof history);
    calculation.textContent = Number(lastHistory);
}

//RESET
h2.onclick = function(){
    final = 0;
    history = [0]
    console.log(final, history)
    calculation.textContent = 0;
}

//UNDO
h1.onclick = function(){
    undo();
}


//RED
r1.onclick = function(){
    final -= 3;
    add();
    calculation.textContent = final;
}
r2.onclick = function(){
    final -= 6;
    add();
    calculation.textContent = final;
}
r3.onclick = function(){
    final -= 9;
    add();
    calculation.textContent = final;
}
r4.onclick = function(){
    final -= 15;
    add();
    calculation.textContent = final;
}

//GREEN
g1.onclick = function(){
    final += 2;
    add();
    calculation.textContent = final;
}
g2.onclick = function(){
    final += 7;
    add();
    calculation.textContent = final;
}
g3.onclick = function(){
    final += 13;
    add();
    calculation.textContent = final;
}
g4.onclick = function(){
    final += 16;
    add();
    calculation.textContent = final;
}




