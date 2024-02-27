Swal.fire({
    title: 'Identificar',
    input: 'text',
    text: 'Digite seu nome!',
    inputValidator: (value) => {
      
        return !value && 'Você precisa escrever seu nome!'
    },
    allowOutsideClick: false,
  }).then((result) => {   
      user = result.value;
    
  });