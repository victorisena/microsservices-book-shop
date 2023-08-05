const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api', (_req, res) => {
  res.json({ message: 'Hello world!' });
});


app.get('/', (_req, res) => {
  res.json('Olá eu sou o Hello App!');
});


app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});