const precise = 2;

function getData(){
    let num = Number(prompt("Temperature Degree (Celsius):  "));
    return num;
}

function tempFormat(f){
    let fs = parseFloat(f).toFixed(precise);
    return fs;
}

function c2f(){
    let c= getData();
    let f = c*(9/5) + 32;
    let fs = tempFormat(f);
    document.getElementById("translation").textContent = fs;
}