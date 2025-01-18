<h1>Sorteador de Amigos</h1>

<h2>Descrição:</h2>

Este projeto foi feito para a o desafio do curso Oracle One, em parceria com a Alura com a finalidade de melhorar e fixar os aprendizados das aulas, principalmente de javascript.
O projeto se trata de um sorteador de amigo secreto, onde o usuário poderá adicionar amigos, formando uma lista visível, sortear um deles e reiniciar a lista.

<h2>Funcionalidades:</h2>

<ul>
<li>Adicionar amigos: Digite o nome do amigo e clique no botão para adicioná-lo à lista.</li>
<li>Sortear amigo: Clique no botão para sortear um amigo aleatoriamente da lista.</li>
<li>Reiniciar lista: Após o sorteio, você pode escolher reiniciar a lista para um novo sorteio.</li>
</ul>

<h2>Clone este repositório:</h2>
Bash

git clone https://github.com/Alexbf88/challenge-amigo-secreto_pt-main.git<br>
Abra o arquivo HTML: Abra o arquivo index.html em seu navegador.<br>
Adicione amigos: Digite os nomes dos amigos no campo de texto e clique em "Adicionar".<br>
Sorteie um amigo: Clique em "Sortear".<br>


<h2>Linguagens utilizadas:</h2>
HTML: Estrutura da página.<br>
JavaScript: Lógica do sorteio e manipulação da DOM.<br>
Personalização: CSS<br>
* A estrutura em HTML e o código CSS foram fornecidos pelo curso

<h2>Amostra do código utilizado para interagir com o usuário:</h2>
<!DOCTYPE html>
<html>
<head>
    <title>Sorteador de Amigos</title>
</head>
<body>
    <input type="text" id="nomeAmigo" placeholder="Digite o nome do amigo">
    <button onclick="adicionarAmigo()">Adicionar</button>
    <button onclick="sortearAmigo()">Sortear</button>
    <ul id="listaAmigos"></ul>

</body>
</html>


