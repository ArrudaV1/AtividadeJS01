// 4) Crie um variável preço e atribua a ela um valor numérico. Em seguida, crie um variável
// desconto e atribua a ela um valor 0.2, representando a porcentagem (20%) de desconto
// que você deseja aplicar. Por fim, crie uma variável Preço final que use as variáveis preço e
// desconto para calcular o preço com desconto e imprima o resultado no console.

let preco = 42; 
let desconto = 0.2;
let precoFinal = preco - (preco * desconto);

console.log("Com desconto seu preço é: R$" + precoFinal.toFixed(2));