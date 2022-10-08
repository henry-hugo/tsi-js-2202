//localStorage usamos para armazenar dados no navegador
//Como trabalhar com SESSION STORAGE

//
let btn = document.getElementById('botao'); //Pegando elemento botÃ£o

btn.addEventListener('click', mostrar); //Quando clica, pega valor de entrada e mostra valor no span

function mostrar(evento){
    evento.preventDefault(); //previnir comportamento padrÃ£o

    let entrada = document.getElementById('entrada')
    let mostrar = document.getElementById('mostrar')
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';
        
    //apÃ³s obtermos o dado do usuÃ¡rio
    //vamos guardÃ¡-lo no local storage
    localStorage.setItem('dadoDoUsuario', valor);
}

//Para recuparar o dado de local storage
//Usamos o localStorage.getItem()
document.setItem('dadoDoUsuario',valor);

//Para apagar no local storage:
//removeItem()
//localStorage.removeItem('dadoDoUsuario');

//Descobrir qual deles faz o que