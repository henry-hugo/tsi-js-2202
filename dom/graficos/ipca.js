
document.querySelector('button').addEventListener('click',recuperaDados);


function recuperaDados(evento) {
  let ano = parseInt(prompt('escreva um ano de 1992 á 2022'));

  if (ano != '') {
    while(ano < 1992 || ano > 2022){
      alert('Escreva um ano valido');
      ano = parseInt(prompt('escreva um ano de 1992 á 2022'));
    }  
  }
  

    evento.preventDefault();

    //faz a chamada  // entao depois 

    fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101').then(function(ret){
       
    //pega apenas o conteudo do retorno 
    return ret.text();

    //entao
    }).then(function(stringJson){
        const indices = JSON.parse(stringJson);

        let indice;
        let ipca = [];
        

        indices.forEach( function(mes){
          let anoString = mes.data.substring(6, 10);
          let mesString = mes.data.substring(3, 5);
          let anoMesString = anoString + "-" + mesString;
          
          if(ano == '') {
            ano = anoString;
          }
          
          if(parseInt(anoString) != ano){
            return;
          }

          indice = parseFloat(mes.valor);

          ipca.push({month: anoMesString, value: indice});

          
        });

    //    console.log(ipca);

         let jsonParaMorris ={
          element: 'ipca',
          data: ipca,
          xkey: 'month',
          ykeys: ['value'],
          labels: ['IPCA']
        };
        
     new Morris.Line(jsonParaMorris);

    })

    

}







