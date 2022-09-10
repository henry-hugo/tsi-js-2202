console.log(window);
//como tribuir um objeto 
// alert(`sua resolucao e: ${window.innerHeight} x ${window.innerWidth}`);

let meutitulo = document.getElementById('titulo');
let nav = window.navigator.vendor;

if(confirm('deixe uma mensagem!')){
    let msg = prompt('msg');
    meutitulo.innerText = msg + `voce esta usando o navegador ${nav}`;
    meutitulo.style.background = 'green';
}else{
    meutitulo.innerText = 'sem mensagem';
    meutitulo.style.background = '#dedede'
}


