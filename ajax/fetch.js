document.querySelector('button').addEventListener('click',recuperaDados);

function recuperaDados(evento) {
    evento.preventDefault();

    //faz a chamada  // entao depois 

    fetch('http://127.0.0.1:5555/ajax/ex1.txt').then(function(ret){
       
    //pega apenas o conteudo do retorno 
    return ret.text();

    //entao
    }).then(function(cont){
        //let json = JSON.parse(cont)
        cont = JSON.parse(cont);
        //trabalhamos com o conteudo retornado
        let saida = '';
    
        cont.forEach(aluno => {
            saida += aluno.idade >= 18 ?
            `${aluno.nome} é maior de idade <br>`
            :
            `${aluno.nome} é menor de idade <br>`;
    });
    document.querySelector('#dadoRecuperado').innerHTML = saida;

    })
}