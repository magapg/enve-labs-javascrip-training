
var nombre = "Magali PG";
var altura = "162";

var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3> `
    ;

    if(altura >= 162){
        datos.innerHTML += '<h1> Eres una persona alta </h1>';}
    else{ 
        datos.innerHTML += '<h1> Eres una persona bajita </h1>';}

        for(var i = 0; i >=2020)

