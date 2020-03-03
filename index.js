// Sobre o porque utilizar strict mode
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode
// https://www.w3schools.com/js/js_strict.asp
"use strict";

// Esse console.log é apenas para ter certeza que o arquivo está sendo carregado pelo index.html
console.log("oi");


function criaInput() {
    let caixa_texto = document.createElement("input"); // cria um elemento HTML input
    caixa_texto.type = "text"; // define a propriedade type para text
    caixa_texto.placeholder = "Digite um texto aqui";// define a propriedade placeholder com um texto específico

    let div = document.getElementById("tabela"); // seleciona a div do HTML
    div.appendChild(caixa_texto); // adiciona o elemento HTML criado anteriormente dentro da div "tabela"
    caixa_texto.focus(); // direciona o foco do cursor para o elemento criado
}