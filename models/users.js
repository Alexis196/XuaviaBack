import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    mail: { type: String, required: true },
    password: { type: String, required: true },
    confirm_password:{ type: String, required: true },
    notif: {type: Boolean},
    is_online: { type: Boolean },
    is_admin: { type: Boolean },
    is_mascoter: { type: Boolean },
    is_user: { type: Boolean },
    is_verified: { type: Boolean, required: false },
    verify_code: { type: String, required: false }
}, {
    timestamps: true
})

let User = mongoose.model("users", userSchema)

export default User