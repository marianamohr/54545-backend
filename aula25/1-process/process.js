//'node process.js 1 2 3' will output ['1', '2', '3']
// console.log(process.argv.slice(2));
// const nome = process.argv.slice(2)[0]

console.log(`Olá1!`)

// node process.js a 2 -a will output ['a', '2', '-a']
//console.log(process.argv.slice(2));

// node process.js --node development will output ['--node', 'development']
//console.log(process.argv.slice(2));

process.on("exit", (code) => {
  console.log(`esse codigo será executado antes de sair do processo`);
});

console();

process.on("uncaughtException", (exception) => {
  console.log(`esse codigo captura todas as exceções não tratadas`);
});

process.on("message", (message) => {
  console.log(`esse codigo será quando aparece uma mensagem`);
});

console.log(`Olá2!`)
