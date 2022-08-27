/*for(let i=0 ;i<10 ;i++){
 document.write("hugo <br>");
}
*/




/*
let i=0;
while(i<=10){
    document.write("hugo <br>");
    i++;
}
*/


/*
let i =0;
do{
    i++;
    document.write("hugo <br>");
}while(i<=10)
*/


/*
let a = Math.floor(Math.random()*10)+1;
let b = Math.floor(Math.random()*10)+1;
if(a>b){
    document.write("a e maior que o b ");
}else if(a==b){
    document.write("a e b e igual");
}else{
    document.write("b e maior que a");    
}
*/


/*
let i= Math.floor(Math.random()*10);
switch (i) {
    case 0:
      document.write("Sunday");
      break;
    case 1:
      document.write("Monday");
      break;
    case 2:
       document.write("Tuesday"); 
      break;
    case 3:
      document.write("Wednesday");
      break;
    case 4:
      document.write("Thursday");
      break;
    case 5:
      document.write("Friday"); 
      break;
    case 6:
      document.write("Saturday");
      break;
    default:
        document.write("nao tem");
}
    */

/*
//ternario

let x = 2;
let y = 2;

let resultado = x > y ? 'x e maior que y':'nao e maior';

console.log(resultado);
*/



let b = prompt("entra com m ou f");
let saida = b == 'm' ? 'mascolina' : 'feminino'

console.log(saida);


//colescente

let coisa ;
let variavel = coisa ?? 'nao ha';
console.log(variavel);