function getGPA(){
    const name = prompt("Student Name:  ");
    let grade1 = prompt("Test 1 Score:  ");
    let grade2 = prompt("Test 2 Score:  ");
    let grade3 = prompt("Test 3 Score:  ");
    
    grade1 = Number(grade1);
    grade2 = Number(grade2);
    grade3 = Number(grade3);
    let gpa = (grade1 + grade2 + grade3)/3;

    document.getElementById("grades").innerHTML+=`<div>
        <p>${name}<p>
        <p>${gpa}</p>
    </div>`
}

function showProduct(counter=1, total=0.0){

    Number(total);
    Number(counter);

    let name = prompt("Product Name:  ");
    let price = prompt("Product Price:  ");
    let quantity = prompt("Product Quantity:  ");
    let amount = Number(price)*Number(quantity);

    total += amount;
    let oText = counter + ". " + name + " - $" + total;
    console.log(oText);
    counter +=1;

    document.getElementById("productInfo").innerHTML+=`<div>
        <p>${oText}</p>
    </div>`
}