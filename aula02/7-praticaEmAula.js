const obj = [
  { macas: 3, peras: 2, carne: 1, frango: 5, doces: 2 }, //0
  { macas: 1, cafes: 1, ovos: 6, frango: 1, paes: 4 }, //1
];

const lista = [];

obj.forEach((item) => {
  const chaves = Object.keys(item);
  lista.push(...chaves);
});

// console.log(lista);

var listaFiltrada = lista.filter((item, i) => {
  //console.log(item, i)
  return lista.indexOf(item) === i;
});
 // console.log(listaFiltrada);

const totalDeProdutosVendidos = obj.reduce((total, objeto) => {
    // console.log(total, quantidadeDePro)
    const quantidadeDeProdutos = Object.values(objeto).reduce(
      (total, valor) => { 
        // console.log(total, valor)
        return total + valor},
      0
    );
    console.log(total, quantidadeDeProdutos)
    return total + quantidadeDeProdutos;
  }, 0);
  
   console.log("Total de produtos vendidos:", totalDeProdutosVendidos);
