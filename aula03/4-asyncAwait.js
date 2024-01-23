const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) {
        reject("Não é possível dividir por zero");
      } else {
        resolve(dividendo / divisor);
      }
    }, 200);
  });
};

const ehPar = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} é Par`);
      } else {
        reject(`${num} não é Par`);
      }
    }, 1000);
  });
};

/* divisao(3, 2)
  .then((result) => {
    console.log(".then do divisao: ", result);
    ehPar(result)
      .then((result) => {
        console.log(".then do ehPar: ", result);
      })
      .catch((error) => {
        console.log(".catch do eh par: ", error);
      });
  })
  .catch((error) => {
    console.log(".cath do dividir: ", error);
  }); */

const main = async () => {
  try {
    const valor1 = await divisao(4,2);
    const result = await ehPar(valor1);
    console.log("com await", result);
    console.log(valor1)
  } catch (error) {
    console.log("error com await", error);
  }
};

main();
