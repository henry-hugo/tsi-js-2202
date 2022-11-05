

document.
    querySelector('button')
        addEventListener('click', recuperaConteudoViaAjax);

function recuperaConteudoViaAjax(){

     //XHR serve pra armazenar objetos, executa ações
    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5555/ajax/conteudo.txt', true);

    XHR.onload = function(){

        if(this.status == 200){

            document.querySelector('#dadoRecuperado').innerHTML
                = this.responseText;
        }
    }

    XHR.send();
}

