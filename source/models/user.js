//modelo mvc: models
//criar ou recuperar dados dentro do banco de dados
//interface com o banco de dados
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('User', userSchema)