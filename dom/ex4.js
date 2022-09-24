let e 
 

e = document.getElementsByClassName('collection-item');
let vetor = Array.from(e);
vetor.forEach(function(val){
    val.style.color = 'green';
    console.log(val.innertext);

    //val.innertext e oura tarefa

    console.log(e[2]);
});

//foreach espesra resceber um prototico de um vetor

e = document.querySelector('ul');

console.log(e[2]);

e = document.querySelectorAll('li:nth-child(even)');
e.forEach(function(val){
    val.style.background = '#dedede'
});

e.forEach(fazalgumacoisa);

function fazalgumacoisa(val) {
    console.log(val);
}

e = document.querySelector('ul.collection');

//console.log(e.lastChild);
//console.log(e.firstChild);
//console.log(e.childElementCount);
console.log(e.children[3].children[0]);