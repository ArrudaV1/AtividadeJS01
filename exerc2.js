// 2) Utilizando os conceitos apresentados, pergunte ao usuário.
// • Qual o nome do usuário;
// • Qual sua idade;
// • Bairro onde mora;
// • Passe o nome do usuário para todas as letras em maiúscula;
// • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o
// resultado da soma desses números na tela. 

let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let bairro = prompt("Digite seu bairro:");

let valor1 = parseInt(prompt("Digite um número inteiro para uma soma:"));
let valor2 = parseInt(prompt("Digite o outro número inteiro:"));
let soma = valor1 + valor2;

alert("Sua soma é: " + soma + "\nSeu nome em maiúsculo: " + nome.toUpperCase());