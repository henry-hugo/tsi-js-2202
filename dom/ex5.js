
//cria um elemento 
let novoitemnalista = document.createElement('li'); //cria elemento
//define id
novoitemnalista.id ='novo-item';
//add uma class css
novoitemnalista.className = 'collection-item';
//add um atributo
novoitemnalista.setAttribute('title','novo item na lista');
//add um atributo
novoitemnalista.setAttribute('name','valor qualquer');
//add um node filho
novoitemnalista.appendChild(document.createTextNode(' fazer exercício físico'));

let elementoancora = document.createElement('a'); //cria elemento

elementoancora.className = 'delete-item secondary-content';

elementoancora.setAttribute = ('href', '#');

let elementoicone = document.createElement('i');

elementoicone.className = 'fa fa-remove';

//add o <i> dentro do <a>

elementoancora.appendChild(elementoicone);

// add <a> dentro do <li>
novoitemnalista.appendChild(elementoancora);

//ul

let tudonoul = document.querySelector('ul.collection');

tudonoul.appendChild(novoitemnalista);
