import mongoose from 'mongoose'

const servicesShema = new mongoose.Schema({
    name: { type: String, required: true },
    detail: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
},{
    timestamps: true
})

const Service = mongoose.model("services", servicesShema)

export default Service