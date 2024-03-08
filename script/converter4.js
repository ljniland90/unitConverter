const precise = 2;
const converterTable = document.getElementById("conversion-table");

var scaleUnit;
var rangeStart;
var rangeEnd;

function convertTemperatureRange(){
    let unit= prompt("What temperature scale do you want to convert from?\n" + 
                      "1. Enter 'F' for Fahrenheit\n" +
                      "2. Enter 'C' for Celsius");
    scaleUnit = unit.toUpperCase();
    rangeStart = prompt("Enter the temperature degree for the starting range of the conversion table:");
    rangeStart = parseInt(rangeStart);
    rangeEnd = prompt("Enter the temperature degree for the ending range of the conversion table");
    rangeEnd = parseInt(rangeEnd);
}

function tempFormat(t){
    toString(t);
    let ts = parseFloat(t).toFixed(precise);
    return ts;
}

function tableCreator(){
    
    convertTemperatureRange();

    let t;
    let tString;

    if(scaleUnit === "C"){
        converterTable.innerHTML += `<tr><td>Celsius</td><td>Fahrenheit</td></tr>`;
        for(let i=rangeStart; i<=rangeEnd; i++){
            t = i*(9/5) + 32;
            tString = tempFormat(t);
            converterTable.innerHTML += `<tr><td>${i}</td><td>${tString}</td></tr>`;
        }
    }
    else{
        converterTable.innerHTML += `<tr><td>Celsius</td><td>Fahrenheit</td></tr>`;
        for(let i=rangeStart; i<=rangeEnd; i++){
            t = (5/9)*(i - 32);
            tString = tempFormat(t);
            t = Number(tString);
            converterTable.innerHTML += `<tr><td>${i}</td><td>${tString}</td></tr>`;
        }
    }
}