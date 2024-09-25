const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: "Yasmin Di Nizo",
    imagem: "https://www.instagram.com/p/Cx54m3nusuq/?locale=en_AE%2B2",
    minibio: "Doula e Desenvolvedora em formação" 
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)