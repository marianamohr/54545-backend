//     index   0  1  2  3  4
const numeros = [1, 2, 3, 4, 5];

const newArr = new Array();

// forEach nao tem retorno
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
numeros.forEach((numero) => newArr.push(numero * 2));

console.log(numeros);

// console.log(newArr);

// map retorna um novo numero
const callback2 = (numero) => numero * 2;

function callback(numero) {
  return numero * 2;
}
const novo = numeros.map(callback);

//console.log(novo);

const ehPar = numeros.map((numero) => {
  // mod =, se interessa com o resto da divisao

  // 2 % 2 = 0
  // 3 % 2 = 1
  if (numero % 2 === 0) {
    return numero;
  } else {
    return "Não é par";
  }
});

console.log(ehPar);
