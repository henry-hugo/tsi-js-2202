console.log('ola mundo');

//vetor
/*
let v=[];
 let amigos = parseInt(prompt("quantos amigos"));
for (i = 0 ; i<amigos ; i++){
   v[i] = prompt("fale seu nome");
}

console.log(v);*/

let vetor = ['hugo', 'henrique','bono','marta'];

for(var i=0;i<vetor.length;i++){
    console.log(`
    linha: ${i}`); //templete string

}

console.log(vetor);

//foreach for =para each = cada
vetor.forEach(function(valor, indice) {
    console.log(`${indice} :${valor}`);
});

vetor.map(function(valor,indice){
    console.log(`${indice} :${valor}`);
});


//funtion
let peso =parseFloat(prompt('qual o seu peso'));
let altura =parseFloat(prompt('qual sua altura'));

let resultado = calcularimc(peso , altura);

alert (resultado);

function calcularimc(peso,altura){
    let imc =(peso/altura^2);
    
    if(imc>25){
        return'acima do peso';
    }else if(imc >= 18 && imc<= 25){
         return'abaixo do peso';
        }else{
        return 'abaixo do peso';
        }
    return retorno;

}
