const educador = {
  nome: "Mari",
  cpf: "542.457.215-00",
  idade: 34,
  professor: true,
  tutor: false,
  compartilharEMail: false,
};

const enderecoEducador = {
  cidade: "Joinville",
  pais: "Brasil",
};

const { nome } = educador;
console.log(nome);

let educadorCompleto =  {...educador , ...enderecoEducador};
console.log("AAAA",educadorCompleto);

 const { cpf, ...educardorSemCpf } = educadorCompleto;
 console.log("cpf",cpf);
 //552.***.***.***-50
 console.log("rest",educardorSemCpf);
 console.log("educador", educadorCompleto);

