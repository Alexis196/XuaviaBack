import express from 'express'
const app = express()

app.get('/', (req, res) => {
    console.log('hola')
})
const PORT = 8080
const server = app.listen( PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on =  (error) => console.log(`Error en el servidor ${error.message}`)