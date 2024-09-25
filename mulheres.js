const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Yasmin Di Nizo",
        imagem: "https://www.instagram.com/p/Cx54m3nusuq/?locale=en_AE%2B2",
        minibio: "Doula e Desenvolvedora em formação"
    },
    {
        nome: "Thaís Lima",
        imagem: "https://www.instagram.com/reel/Ck4A-MruL6g/?locale=en_AE%2B2",
        minibio: "Enfermeira Obstétrica"
    },
    {
        nome: "Patricia Azevedo",
        imagem: "https://www.instagram.com/reel/Ck4A-MruL6g/?locale=en_AE%2B2",
        minibio: "Doula e Reflexologista"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)