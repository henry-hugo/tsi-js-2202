document.
querySelector('button').addEventListener('click', recuperaConteudoViaAjax);

function recuperaConteudoViaAjax(){

 //XHR serve pra armazenar objetos, executa ações
const XHR = new XMLHttpRequest;

XHR.open('GET', 'http://127.0.0.1:5555/ajax/ex1.txt', true);

XHR.onload = function(){

    if(this.status == 200){
        let guardaJSON = JSON.parse(this.responseText);
        // document.querySelector('#dadoRecuperado').innerHTML
        //     = this.responseText;

            guardaJSON.forEach(usuario => {
                if(usuario['idade'] >= 18){
                    document.querySelector('#dadoRecuperado').innerHTML
                    += `${usuario['nome']} é maior de idade<br>`;
                } 
                else{
                    document.querySelector('#dadoRecuperado').innerHTML
                    += `${usuario['nome']} é menor de idade<br>`;
                }
            });
            

            console.log(guardaJSON);
    }
}

XHR.send();
}


