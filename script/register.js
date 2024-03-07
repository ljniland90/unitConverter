let petSalon = {
    name:"The Fashion Pet",
    phone:"999-999-9999",
    address:{
        country:"United States",
        city:"San Diego",
        zip:"12345"
    },
    pets:[
        {
            name:"Larry Legend",
            age:"33",
            gender:"Male"
        },
        {
            name:"Magic",
            age:"32",
            gender:"Male"
        },
        {
            name:"MJ",
            age:"23",
            gender:"Male"
        },
        {
            name:"Kobe",
            age:"24",
            gender:"Male"
        }
    ]
}

console.log(petSalon.pets[0].name);

document.getElementById("petsList").innerHTML.write(petSalon.pets[0].name);