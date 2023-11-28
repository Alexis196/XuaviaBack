import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import indexRouter from './router/index.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(indexRouter)

const PORT = 8080
const server = app.listen( PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on =  (error) => console.log(`Error en el servidor ${error.message}`)