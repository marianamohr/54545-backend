const a = 2;
const b = 2;

const c = a + b;
console.log(c);

// Declaração "Normal"
function soma(a, b) {
  return a + b;
}
console.log(soma(4, 4));

const numeros = [
  { a: 1, b: 3 },
  { a: 2, b: 4 },
  { a: 5, b: 1 },
  { a: 4, b: 1 },
];

for (const num of numeros) {
  console.log(`${num.a} + ${num.b} = ${soma(num.a, num.b)}`);
}

// Arrow Function
const diminuir = (a, b) => {
  return a - b;
};

for (const num of numeros) {
  console.log(`${num.a} - ${num.b} = ${diminuir(num.a, num.b)}`);
}

