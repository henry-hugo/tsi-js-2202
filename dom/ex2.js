let btncalcular = document.getElementById('calcular');

btncalcular.addEventListener('click',function(evento){
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');
    let preco = calculapreco(serv.value, prazo.value);
    res.innerText = `o preço e ${preco}`;
    
    console.log(serv.value);

    console.log(evento);
});

function calculapreco(servico,prazo) {
    let tabela =[['$$$','$$','$'],
                ['$$$$','$$$','$$'],
                ['--','--','$$$']];

                return tabela[servico][prazo];
}


