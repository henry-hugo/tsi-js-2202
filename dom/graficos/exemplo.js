new Morris.Donut({
    
    // ID of the element in which to draw the chart.
    //id do elemento em que desenhar o gráfico.
   
    element: 'graficoDePizza',
    
    // Chart data records -- each entry in this array corresponds to a point on
    //Gráfico de registros de dados - cada entrada nesta matriz corresponde a um ponto em
    
    // the chart.
    //o gráfico.
  
    data: [
      { label: 'agua', value: 20 },
      { label: 'cafe', value: 10 },
      { label: 'suco', value: 5 },
      { label: 'pao', value: 5 },
      { label: 'feijao', value: 20 },
      { label: 'pizza', value: 0.5 },
      { label: 'pipoca', value: 100 }
    ],
    colors:['#0ff'],
    
    // The name of the data record attribute that contains x-values.
    //O nome do atributo de registro de dados que contém valores x.
    
    xkey: 'label',
    
    // A list of names of data record attributes that contain y-values.
    //Uma lista de nomes de atributos de registro de dados que contêm valores y.
    
    ykeys: ['value'],
    
    // Labels for the ykeys -- will be displayed when you hover over the
    // Rótulos para os ykeys - será exibido quando você pairar sobre o

    // chart.
    //gráfico.
    
    labels: ['Value']
  });


  new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'graficoDeLinha',
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
  });



  new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'graficoDeBarra',
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
    barColors:['#f0f'],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });
  new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'graficoDeArea',
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
      { year: '2017', value: 10 },
      
    ],
    lineColors:['red'],
    
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });