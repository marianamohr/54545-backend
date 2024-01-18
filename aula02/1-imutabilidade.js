//const nome = "Mari";

//nome = "Guilherme";

const educador = {
  nome: "Mari",
  idade: 34,
  professor: true,
  tutor: false,
};

console.log(educador.nome);

educador.nome = "Mari Mohr";

console.log(educador.nome);


const educadores = [
    {
      nome: "Mari",
      idade: 34,//0
      professor: true,
      tutor: false,
    },
    {
      nome: "Guilherme",//1
      idade: 34,
      professor: false,
      tutor: true,
    },
  ];

  console.log(educadores);

educadores[1].nome = "Guilherme Salzer";

console.log(educadores);
