import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import indexRouter from './router/index.js'
import { errorHandler } from './middleware/errorHandler.js'
import { errorNotFound } from './middleware/error.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(indexRouter)
app.use(errorNotFound)
app.use(errorHandler)

const PORT = 8080
const server = app.listen( PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on =  (error) => console.log(`Error en el servidor ${error.message}`)