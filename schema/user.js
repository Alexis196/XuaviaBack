import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    nombre: {type: String},
    apellidpo: {type: String},
    rol: {type: String},
    fotoPerfil: {type: String}
},{
    timestamps: true
})

const User = mongoose.model('users', userSchema)
export default User