/*
function mulTable(num){

    document.write(`<h2>Muliplication Table for ${num}</h2>`);

    for(let i=1; i<=12; i++){
        console.log(num + " times " + i + " = " + i*5);
        document.write(`<p>${num} times ${i} = ${num*i}</p>`);
    }

}

mulTable(7);

let answer = Math.floor(Math.random()*10) + 1;
let userGuess = Number(prompt("Guess a number between 1 and 10:"));

while(userGuess !== answer){

    userGuess = Number(prompt("Incorrect! Try again. Pick another number from 1-10:"));
}

window.alert("Congratulations, you found the answer!");


function password(){

    let password = "secret";
    let attempts = 3;
    let userGuess = prompt("Enter the password to continue:");
    
    if(userGuess == password){
        window.alert("Congratulations, you may enter!");
    }

    else{
        
        while((userGuess != password) || (attempts == 0)){
            attempts--;
            userGuess = prompt("Incorrect! You have " + attempts + " remaining attempts. Try again:");
        }
    
        if((attempts != 0) && (password == userGuess)){
            window.alert("Congratulations, you may enter!");
        }
        else{
            window.alert("Sorry, you cannot enter.");
        }
        
    }

}

password();
*/

function fizzBuzz(){

    for(let i=1; i<=20; i++){

        let code = 0;
        let test1 = (i%3) + (i%5);
        let test2 = i%3;
        let test3 = i%5;
        
        if(test1 == 0){
            code = 1;
        }else if(test2==0){
            code = 2;
        }else if(test3 == 0){
            code = 3;
        }else{
            code = 0;
        }

        switch(code){
            case 1:
                document.write(`<p>FizzBuzz</p>`);
                break;
            case 2:
                document.write(`<p>Fizz</p>`);
                break;
            case 3:
                document.write(`<p>Buzz</p>`);
                break;
            default:
                document.write(`<p>${i}</p>`);

        }
    }

}

fizzBuzz();