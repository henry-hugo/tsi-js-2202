//como atualizar um elemento com js

//criar um elemento
const novotitle = document.createElement('h2');
//colocar caracteristicas que desejamos
novotitle.id= 'task-title';
novotitle.appendChild(document.createTextNode('Nova lista'));

const titleatual = document.getElementById('task-title');

//capturamos o elemento h5 atual (que esta original no html.)
//queromos atualizar
let divMaeDoTitle = document.getElementsByClassName('card-action');

//comando de atualizar

divMaeDoTitle[0].replaceChild(novotitle, titleatual);

//divMaeDoTitle.replaceChild(novotitle, titleatual); (troca usando querySelector)

//titleatual.replaceWith(novotitle); (troca tudo sem pegar o pai)