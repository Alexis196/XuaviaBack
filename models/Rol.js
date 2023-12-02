import express from 'express'
import mongoose from 'mongoose'

const rolesSchema = new mongoose.Schema({
    rol: { type: String, required: true },
})

const roles = mongoose.model("roles", rolesSchema)
export default roles
