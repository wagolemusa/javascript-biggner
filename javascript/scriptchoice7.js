function compare (choice1, choice2){
	if (choice1 === choice2)
		return "The results is a lie";
	else if (choice1 === "rock"){
		//here , choice can only be p or s
		if (choice2 === "scissors")
			return "Rock Wins";
		else
			return "Paper wins";
	}

	else if (choice1 === "paper"){
		if (choice2 === "rock")
			return "Paper wins!";
		else
			return "Rock wins!";
	}
}