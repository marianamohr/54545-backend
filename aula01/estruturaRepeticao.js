const array = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

const educadores = [
  {
    nome: "Mari",
    idade: 34,
    professor: true,
    tutor: false,
  },
  {
    nome: "Guilherme",
    idade: 34,
    professor: false,
    tutor: true,
  },
];

for (let index = 0; index < educadores.length; index++) {
  const educador = educadores[index];
  if (educador.professor === true) {
    console.log(`${educador.nome} é professor!`);
  } else if (educador.tutor === true) {
    console.log(`${educador.nome} é tutor!`);
  }
}