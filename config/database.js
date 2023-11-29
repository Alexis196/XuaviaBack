import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Base de Datos conectada'))
    .catch(err => console.log(err.message))
