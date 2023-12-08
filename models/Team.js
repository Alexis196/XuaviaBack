import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    foto: { type: String, required: true },
    linkedin: { type: String, required: true },
})

export default mongoose.model('teams', teamSchema)