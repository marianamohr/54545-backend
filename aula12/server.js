const express = require('express');
const upload = require('./multerConfig'); // Importar a instância do Multer configurada

const app = express();

// Rota para upload de arquivo
app.post('/upload', upload.single('file'), function (req, res) {
    // A manipulação do arquivo enviado pode ser feita aqui
    res.send('Arquivo enviado com sucesso!');
});

app.listen(4000, function () {
    console.log('Servidor rodando na porta 4000');
});
