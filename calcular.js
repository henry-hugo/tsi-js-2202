let altura1 = prompt("qual a sua altura"); 
let peso1 = prompt("qual a seu peso");  

let numero1 = parseFloat(altura1.replace(',', '.'));
let numero2 = parseFloat(peso1.replace(',', '.'));

let alt = numero1*numero1;
let resultado = numero2/alt;

document.write(numero2 + "<br>");
document.write(alt +"<br>");
document.write("seu imc é "+ resultado);