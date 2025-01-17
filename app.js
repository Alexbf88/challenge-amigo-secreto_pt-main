//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let lista;

function adicionarAmigo(){
    amigos.push(document.querySelector('input').value);
    document.querySelector('input').value = '';

    lista=document.getElementById('listaAmigos');
    let amigoItem = document.createElement('li');
    amigoItem.textContent = amigos[amigos.length - 1];
    lista.appendChild(amigoItem);
} 

