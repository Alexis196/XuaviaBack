import mongoose from 'mongoose'

const servicesShema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    name: { type: String, required: true },
    detail: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Types.ObjectId, required: true },
    image: { type: String, required: false },
},{
    timestamps: true
})

const Service = mongoose.model("services", servicesShema)

export default Service