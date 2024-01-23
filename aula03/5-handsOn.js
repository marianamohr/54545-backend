const soma = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject("operação desnecessaria");
    }
    const soma = num1 + num2;
    if (soma < 0) {
      reject("deve retornar somente resultados positivos");
    } else {
      resolve(soma);
    }
  });
};

const subtracao = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject("operação desnecessaria");
    }
    const subtracao = num1 - num2;
    if (subtracao < 0) {
      reject("deve retornar somente resultados positivos");
    } else {
      resolve(subtracao);
    }
  });
};

const multiplicacao = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 < 0 || num2 < 0) {
      reject("Fatores devem ser positivos");
    }
    const mult = num1 * num2;
    if (mult < 0) {
      reject("deve retornar somente resultados positovos");
    } else {
      resolve(mult);
    }
  });
};




const divisao = (num1, num2) => {
    return new Promise((resolve, reject) => {
      if (num1 < 0 || num2 < 0) {
        reject("Fatores devem ser positivos");
      }
      const div = num1 / num2;
      if (div < 0) {
        reject("deve retornar somente resultados positivos");
      } else {
        resolve(div);
      }
    });
  };

const main = async () => {
  try {
    const resultado = await soma(50, 30);
    console.log("soma", resultado);
  } catch (error) {
    console.log("catch => ", error);
  }
};

main();
