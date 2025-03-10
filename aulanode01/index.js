const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
let port = process.env.PORT || 3001;

app.use(express.json());

const hello1 =  (req,res) => {
    res.send({message: "Hello, world!"});
};

const hello2 = (req,res) => {
    let nome = req.params.nome;
    res.send(`Hello world, ${nome}!`);
};

const helloPost = (req, res) => {
    let { nome } = req.body;
    res.send(`Hello world, ${nome}!`)
};

// ROTAS
app.get('/', hello1);
app.get('/hello/:nome', hello2);
app.post('/hello', helloPost)

app.listen(port, ()=>{
    console.log("executando...")
})
