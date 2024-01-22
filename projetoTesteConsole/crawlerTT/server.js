const express = require('express');
const app = express();

// Configuração para permitir acesso de todos os origens (não recomendado para produção)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Rota para servir uma página com URLs de imagens de teste
app.get('/', (req, res) => {
  const imagens = [
    'https://via.placeholder.com/150',
    'https://pbs.twimg.com/media/GBtTaDla8AAJ45L?format=jpg&',
    'https://via.placeholder.com/250'
  ];

  // Responde com um objeto JSONP contendo as URLs das imagens
  res.jsonp(imagens);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000/');
});
