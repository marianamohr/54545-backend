const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configurar o destino e o nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Configurar a instância do Multer
const upload = multer({ storage: storage });

// Rota para upload de arquivo
app.post('/upload', upload.single('file'), function (req, res) {
    // A manipulação do arquivo enviado pode ser feita aqui
    res.send('Arquivo enviado com sucesso!');
});

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app; // Exportar a instância do Express para uso em outros arquivos, se necessário
