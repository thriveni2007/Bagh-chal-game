 let board=document.getElementById("board");

let playerName=localStorage.getItem("playerName");
let mode=localStorage.getItem("gameMode");

document.getElementById("welcome").innerText="Player: "+playerName;
document.getElementById("mode").innerText="Mode: "+mode;

let turn="goat";

let cells=[
"T","","","","T",
"","","","","",
"","","","","",
"","","","","",
"T","","","","T"
];

let selected=null;

function drawBoard(){

board.innerHTML="";

cells.forEach((cell,index)=>{

let div=document.createElement("div");

div.classList.add("cell");

if(cell==="T") div.innerHTML="🐯";
if(cell==="G") div.innerHTML="🐐";

div.addEventListener("click",()=>clickCell(index));

board.appendChild(div);

});

}

function clickCell(index){

if(turn==="goat"){

if(cells[index]===""){
cells[index]="G";
turn="tiger";
document.getElementById("turn").innerText="Turn: Tiger";

if(mode==="ai"){
setTimeout(aiMove,500);
}

}

}

else{

if(selected===null && cells[index]==="T"){
selected=index;
return;
}

if(selected!==null && cells[index]===""){
cells[index]="T";
cells[selected]="";
selected=null;
turn="goat";
document.getElementById("turn").innerText="Turn: Goat";
}

}

drawBoard();

}

function aiMove(){

let empty=cells
.map((v,i)=>v===""?i:null)
.filter(v=>v!==null);

let move=empty[Math.floor(Math.random()*empty.length)];

cells[move]="G";

turn="tiger";

document.getElementById("turn").innerText="Turn: Tiger";

drawBoard();

}

function resetGame(){

cells=[
"T","","","","T",
"","","","","",
"","","","","",
"","","","","",
"T","","","","T"
];

turn="goat";

drawBoard();

}

drawBoard();