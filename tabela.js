//tabela de compra

let tabela=[   ['$$$','$$','$'],
               ['$$$$','$$$','$$'],
               ['--','--','$$$']];

let servico = prompt("entre com o serviço: \n0 - troca de oleo \n1 - balanceamento \n2 - cambagem ");
let prazo = prompt("entre com o prazo: \n0 - um dia \n1 - dois dias \n2 - tres dias \n3");

if(validaentrada(servico)&&validaentrada(prazo)){
   alert("o serviço ficara em: "+tabela[servico][prazo]);
} else{
   alert("erro: verificar os valores informados");
}

function validaentrada(dadousuario) {
   return dadousuario >= 0 && dadousuario <= 2 ? true : false;
}