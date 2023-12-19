const express = require('express');
const app = express();

// Rota para servir uma página com URLs de imagens de teste
app.get('/', (req, res) => {
  const imagens = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250'
  ];

  // Responde com um objeto JSONP contendo as URLs das imagens
  res.jsonp(imagens);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000/');
});
