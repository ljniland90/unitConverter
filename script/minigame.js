function userChoice(choice){
    let computerChoice = Math.floor(Math.random()*3) + 1;
    let computerChoiceText = "initial";

    switch(computerChoice){
        case 1:
            computerChoiceText = "rock";
            break;
        case 2:
            computerChoiceText = "paper";
            break;
        case 3:
            computerChoiceText = "scissors";
            break;
    }

    let result = determineWinner(choice, computerChoice);

    console.log(computerChoice);
    console.log(choice);
    console.log(computerChoiceText);
    console.log(result);
}

function determineWinner(x, y){

    if(x==y){
        return "It is a tie";
    } else{
        return "somebody won"
    }

}