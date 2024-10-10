// 5) Utilizando os conceitos apresentados, desenvolva um programa que faça o seguinte:
// • Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2).
// • Calcule a média do aluno.
// • Utilize o operador ternário para informar se o aluno está aprovado ou reprovado,
// considerando que a nota mínima para aprovação é 6.

let n1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let n2 = parseFloat(prompt("Digite a nota da segunda prova: "));

let media = (n1 + n2) / 2;

let resultado = media >= 6 ? "Aprovado" : "Reprovado";

alert("A Média do aluno é: " + media.toFixed(2) + "\nEntão, o aluno está: " + resultado);