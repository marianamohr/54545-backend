const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const divisao = (num1, num2) => num1 / num2;
const multiplicacao = (num1, num2) => num1 * num2;

const calculadora = (num1, num2, operacao) => {
  console.log(`Estamos executando uma: ${operacao.name}`);
  return operacao(num1, num2);
};

console.log(calculadora(1, 1, soma)); // 2
console.log(calculadora(1, 1, subtracao)); // 0
console.log(calculadora(10, 2, divisao)); // 5
console.log(calculadora(2, 2, multiplicacao)); // 4

//analiseCasa(){} credito na praca 300k
//analiseMoto(){} credito na praca 30k

//analiseDeCredito(usuario, analiseCasa){
// valido nome, idade, nasc
// analiseCasa(usuario)
// }

// const gui = analiseDeCredito(usuario, analiseCasa)
//const mari = analiseDeCredito(usuario, analiseMoto)
