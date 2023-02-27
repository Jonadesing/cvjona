console.log("Hola mundo");

let numero1 = 3;
let numero2 = 5;

let resultado = numero1+numero2;

console.log ("la suma de numero1 y numero 2 es: " + resultado);


document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById ("demo").innerHTML = "estamos probando java script";
}