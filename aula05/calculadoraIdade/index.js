const moment = require("moment")

const main = () => {
    const data = moment();
    const dataNascimento = moment("29/11/1989","DD/MM/YYYY")

    if (!dataNascimento.isValid()) {
        console.error('Data de nascimento inválida.');
        process.exit(1);
      }
    const diff = data.diff(dataNascimento, 'day');
   
    console.log(diff)
}

main()