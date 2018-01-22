// Get the user;s choice
var userChoice = prompt("Do you chooce rock, paper, or sisors");

// Get computer's "choice"

var computerChoice = Math.random();
console.log(computerChoice);
if  (computerChoice < .34){
	computerChoice = "rock";
}
 
else if (computerChoice < .67){
	computerChoice = "paper";
}

 else{
	computerChoice = "sisors";
}