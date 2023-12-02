import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    mail: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: mongoose.Types.ObjectId, ref: 'roles', required: true },
    is_online: { type: Boolean, required: true },
    is_admin: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true }
}, {
    timestamps: true
})

let User = mongoose.model("users", userSchema)

export default User