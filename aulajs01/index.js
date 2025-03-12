const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
let port = process.env.PORT || 3001;

app.use(express.json());

const pessoa = {
    nome : "Isabella",
    status : "true",
    valor : 108.46,
    endereco: {
        logradouro: "Rua",
        nome: "218",
        numero: "630"
    }
}

const lerJson = (req, res) => {
    let { nome } = req.body;
    res.send(`Olá, ${nome}`)
};

app.get('/', lerJson);

app.listen(port, ()=>{
    console.log("executando...")
})
