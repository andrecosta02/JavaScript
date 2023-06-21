// Importe os módulos necessários
const express = require('express');
const mysql = require('mysql2');

// Crie uma instância do Express
const app = express();

// Configure a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'andre',
  password: 'andre123',
  database: 'teste'
});

// Teste a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

// Rota para receber os dados do formulário
app.post('/enviar-dados', (req, res) => {
  // Obtenha os dados do formulário do objeto de solicitação
  const { campo1, campo2, campo3 } = req.body;

  // Execute uma consulta para inserir os dados no banco de dados
  const query = `INSERT INTO tabela (campo1, campo2, campo3) VALUES (?, ?, ?)`;
  connection.query(query, [campo1, campo2, campo3], (err, results) => {
    if (err) {
      console.error('Erro ao inserir os dados:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }
    res.send('Dados inseridos com sucesso!');
  });
});

// Inicie o servidor na porta desejada
app.listen(3005, () => {
  console.log('Servidor iniciado');
});
