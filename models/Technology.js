import mongoose from 'mongoose'

const technologySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
})

const Technology = mongoose.model("technologies", technologySchema)
export default Technology