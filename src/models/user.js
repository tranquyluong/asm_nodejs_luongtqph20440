import { number, string } from "joi";
import mongoose from "mongoose";
const uathchema = new mongoose.Schema({
    email: {
        type: String,

    },
    password: {
        type: Number
    }

})