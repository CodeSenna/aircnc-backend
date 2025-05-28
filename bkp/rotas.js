//index() listagem de sessões
//show() lista 1 sessão
//store() cria 1 sessão
//update() altera 1 sessão
//destroy() excluir 1 sessão

const express = require('express');
const SessaoController = require('./controllers/SessaoController')

//express.Router() cria um roteador isolado.
const routes = express.Router();

routes.post('/sessao', SessaoController.store)

module.exports = routes;
//faz com que, ao importar em server.js, você obtenha esse conjunto de rotas pronto.