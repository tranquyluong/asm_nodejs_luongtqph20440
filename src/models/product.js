import { string } from "joi";
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    price: {
        type: Number,
    },
    DeScription: {
        type: String,
    }

});

export default mongoose.model('Product', productSchema);