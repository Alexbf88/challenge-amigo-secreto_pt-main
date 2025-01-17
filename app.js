//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let lista;

function adicionarAmigo(){
    let validaCampo;
    validaCampo = document.querySelector('input').value;
      if  (validaCampo ==''){
        alert("preencha um nome antes de adicionar");
    }
      else {
        
        amigos.push(document.querySelector('input').value);
        document.querySelector('input').value = '';
    
        lista=document.getElementById('listaAmigos');
        let amigoItem = document.createElement('li');
        amigoItem.textContent = amigos[amigos.length - 1];
        lista.appendChild(amigoItem);
}
} 

function sortearAmigo()
{
    let tamanhoLista;
    let sorteado;
    tamanhoLista = amigos.length;
    sorteado = amigos[Math.floor(Math.random()*tamanhoLista)];
    alert(sorteado);
}
