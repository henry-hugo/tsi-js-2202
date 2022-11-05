document.querySelector('button').addEventListener('click',recuperaDados);

function recuperaDados(evento) {
    evento.preventDefault();

    //nome do usuario

    let nome = document.getElementById('nome').value;

    //faz a chamada  // entao depois 

    fetch(`https://api.agify.io/?name=${nome}`).then(function(ret){
       
    //pega apenas o conteudo do retorno 
    return ret.text();

    //entao
    }).then(function(cont){
        //let json = JSON.parse(cont)
        cont = JSON.parse(cont);
        //trabalhamos com o conteudo retornado
        let saida = `${cont.name} tem ${cont.age} anos`;
    
        document.getElementById('nome').value = '';

        document.querySelector('#dadoRecuperado').innerHTML = saida;
       
    });
    }