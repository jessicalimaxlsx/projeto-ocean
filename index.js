const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/oi', (req, res) => {
    res.send('Olá mundo!');
})

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

app.get('/herois', (req, res) => {
    res.send(herois);
})

app.listen(port, () => {
    console.log("A aplicação está rodando em http://localhost:3000")
})
