const precise = 2;

function getUnit(){
    let unit = prompt("What temperature scale are you using?\n" + 
                      "1. Enter 'F' for Fahrenheit\n" +
                      "2. Enter 'C' for Celsius");
    let unit2 = unit.toUpperCase();
    return unit;
}

function getDegree(){
    let degree = Number(prompt("Enter the temperature in degrees of your preferred scaling unit:"));
    return degree;
}

function tempFormat(f){
    let fs = parseFloat(f).toFixed(precise);
    return fs;
}

function tempConverter(){
    let u = getUnit();
    let t= getDegree();
    let tString;
    
    if(u === "C"){
        t = c*(9/5) + 32;
        tString = tempFormat(t) + " F";
    }
    else{
        t = (5/9)*(t - 32);
        tString = tempFormat(t) + " C";
    }

    document.getElementById("translation").textContent = tString;
}