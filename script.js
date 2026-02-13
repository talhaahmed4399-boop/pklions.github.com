function calc(){

let rank = Number(document.getElementById("rank").value);
let kills = Number(document.getElementById("kills").value);

let rankPoints = 0;

if(rank==1) rankPoints=10;
else if(rank==2) rankPoints=6;
else if(rank==3) rankPoints=5;
else if(rank<=10) rankPoints=3;

let total = rankPoints + kills;

document.getElementById("result").innerHTML =
"Total Points: " + total;

}
