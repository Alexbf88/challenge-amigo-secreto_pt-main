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

// function geraLista(){
//     lista=document.getElementById('listaAmigos');
//     // lista.innerHTML = amigos;
    
// }







// //    const frutas = ['Maçã', 'Banana', 'Uva'];
// const listaFrutas = document.getElementById('minhaLista');

// // Iterando sobre o array e criando elementos li
// frutas.forEach(fruta => {
//   const li = document.createElement('li');
//   li.textContent = fruta;
//   listaFrutas.appendChild(li);
// });