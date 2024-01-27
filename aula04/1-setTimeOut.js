//console.log("Tarefa Iniciada!");
//console.log("Executando...");
////console.log("Continuação...");
//console.log("Tarefa Terminada!");

const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

let operacao = () => console.log("Executando...");

console.log("Tarefa Iniciada!");
temporizador(operacao);
console.log("Tarefa Terminada!");

