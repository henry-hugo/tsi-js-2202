const cartao = document.querySelector('.card');
const titulo = document.querySelector('h5');

//Tipo do evento, cada vez qo mouse se mexe, motra no console
/*cartao.addEventListener('mousemove', executaAcao);


function executaAcap(evento){

    console.log(evento.type);
}
*/

//Troca eixotículo e fica prêmio X e Y
cartao.addEventListener('mousemove', executaAcao);


function executaAcap(evento){

    //console.log(evento)

    titulo.textContent =
    `Eixo X: ${evento.offsetX}
    Eixo Y: ${evento.offY}`;

    document.body.style.backgroundColor =
    `rgb(${evento.offsetX},
        ${evento.offsetY},40)`;

}