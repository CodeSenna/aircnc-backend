const express = require("express");
const mongoose = require("mongoose");

const routes = require('./routes');
const app = express(); // Está recebendo o express, então qnd for chamado será "app"

async function startDatabase(){
    try {
        await mongoose.connect('mongodb+srv://matheushssousa:yz1GmunwWXzXQbP7@clusterapi.xnjzr.mongodb.net/dataArcnc?retryWrites=true&w=majority&appName=ClusterAPI')
        console.log('Conectado ao MongoDBAtlas')
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB: ', error.message);
        process.exit(1); // Encerra o processo se a conexão falhar
   }
};

startDatabase().then( () => {

    app.get('/', (req, res) => {
        return res.json({mensagem:'API ArCNC Rodando ...'})
    })
    
    const server = app.listen(3335, () => {
        console.log("Servidor rodando na porta 3335")
    });
});
