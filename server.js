import express from 'express'
const app = express()


const PORT = 8080
const server = app.listen( PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on =  (error) => console.log(`Error en el servidor ${error.message}`)