const geraNumeroAleatorio = () => {
  const numero = Math.floor(Math.random() * 20) + 1;
  return numero;
};
const geraLista = (limit) => {
  const array = new Array(limit);
  for (let index = 0; index < array.length; index++) {
    array[index] = geraNumeroAleatorio();
  }
  return array;
};

const contagemDeNumeros = (lista) => {
    const numeros = {};
  lista.forEach((numero) => {
    console.log(numero, numeros[numero])
    if(!numeros[numero]){
        numeros[numero] = 1
    } else {
        numeros[numero] = numeros[numero] + 1
    }
  });

  return numeros;
};

//{
// 2: 2,
// 8: 2,
// 16: 1
//}

main = () => {
  const lista = geraLista(200);
  console.log(lista);
  const contagem = contagemDeNumeros(lista);
  //console.log(contagem)
};

main();
