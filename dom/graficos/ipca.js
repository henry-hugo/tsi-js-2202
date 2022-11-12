document.querySelector('button').addEventListener('click',recuperaDados);

function recuperaDados(evento) {
    evento.preventDefault();

    //faz a chamada  // entao depois 

    fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101').then(function(ret){
       
    //pega apenas o conteudo do retorno 
    return ret.text();

    //entao
    }).then(function(stringJson){
        const indices = JSON.parse(stringJson);

        let jsonParaMorris = {element: 'ipca',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
          { year: '2008', value: 20 },
          { year: '2009', value: 10 },
          { year: '2010', value: 5 },
          { year: '2011', value: 5 },
          { year: '2012', value: 20 },
          { year: '2013', value: 0.5 },
          { year: '2014', value: 100 },
          { year: '2015', value: 54 },
          { year: '2016', value: 51 },
          { year: '2017', value: 10 }
        ],
        lineColors:['#ff0'],
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    }
    new Morris.Line(jsonParaMorris);

    });

    

}







