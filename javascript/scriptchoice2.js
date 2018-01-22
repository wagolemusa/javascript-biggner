var compare = function (choice1, choice2){

	if ( choice1 === choice2){
		return "The results is an tie"
	}
	else if (choice1 === "rock"){
		if (choice2 === "scissors"){
				return "rock wins";
		}
		else{
			return "paper wins"
		}
	}
}