//localStorage.setItem('nome', 'Camila');
//localStorage.setItem('sobrenome', 'Silva');

//COMO TRABALHAR COM SESSION STORAGE
//Como trabalhar com SESSION STORAGE

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);
function mostrar (evento){
function mostrar(evento){
    evento.preventDefault();

        evento.preventDefault();
    let entrada =  document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';

        let entrada = document.getElementById('entrada');
        let mostrar = document.getElementById('mostrar');
        let valor = entrada.value;
        mostrar.innerText = valor;
        entrada.value = '';
        //após obtermos o dado do usuário
        //vamos guardá-lo no local storage
        sessionStorage.setItem('dadoDoUsuario', valor);
}

        /*após obtermos o dado do usuario vamos guarda lá
        no local storage */
//Para recuperar o dado de local storagem
//Usamos o sessionstorage.getItem()
    sessionStorage.getItem('dadoDoUsuario');

        sessionStorage.setItem('dadosDoUsuario', valor);
//E para apagar no local storage?
//removeItem()
//sessionStorage.removeItem('dadoDoUsuario');

}
let vetor = ['pera', 'banana', 'manga'];

/*Para recuperar o dado do local storage usamos o 
localStorage.getItem();*/
//Para guardar algo que não seja uma string
//no localStorage ou sessionStorage, temos
//que converter para string. Com o método
//JSON.stringify() transformamos vetores
//e objetos em string

document.querySelector('#mostar').innerText = 
    sessionStorage.getItem('dadoDoUsuario');
sessionStorage.setItem('frutas', 
                                JSON.stringify(vetor));  

//Para recuperar uma string JSON do localStorage
//ou sessionStorage e transformar em um objeto
//ou vetor novamente, use JSON.parse()
let recupDado = JSON.parse(
                            sessionStorage.
                                getItem('frutas'));

//Alterações no vetor recuperado
//do sessionStorage
recupDado[3] = 'morango';
recupDado[1] = 'parchita';

//E para apagar no local Storage :: removeItem();
//console.log(recupDado);

//localStorage.removeItem('dadoDoUsuario');
//Transforma o vetor em string para poder
//gravar em sessionStorage ou localStorage
let strRecupDados = JSON.stringify(recupDado);

//console.log(strRecupDados); 

//Atualiza o item frutas no sessionStorage
sessionStorage.setItem('frutas', strRecupDados);