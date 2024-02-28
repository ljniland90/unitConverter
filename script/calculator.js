function calculator(){

    let num1 = Number(prompt("Enter the first number:  "));
    let num2 = Number(prompt("Enter the second number:  "));
    let result = num1;

    let s = "\n";
    let menu = "Select the Operation:" + s +
            "1. Addition" + s +
            "2. Subtraction" + s +
            "3. Multiplication" + s +
            "4. Division" + s +
            "Enter the number corresponding to the desired operation:  ";

    let choice = parseInt(prompt(menu));
    let valid = (choice <= 4) || (choice >= 1);

    switch(choice){
        case 1:
            result += num2;
            break;
        case 2:
            result -= num2;
            break;
        case 3:
            result *= num2;
            break;
        case 4:
            result /= num2;
            break;
    }
        
    if(!valid){
        let response = "Incorrect choice. Please click again for a valid result!";
        console.log(response);
    }
    
    let response = "Result:  " + result;
    console.log(response);

    document.getElementById("calculator").innerHTML+=
    `<div><p>${response}</p></div>`

}