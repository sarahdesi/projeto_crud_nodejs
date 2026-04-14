import express, { request, response } from "express"
import connectDatabase from "./database/db.js"
import routes from './routes.js/routes.js'

const server = express()

server.use(express.json())
server.use(routes)

connectDatabase()
.then(() => {
    server.listen(3000, () => console.log("Servidor e banco de dados conectados"))
})
        .catch((error) => console.log('Deu ruim, erro:', error))




