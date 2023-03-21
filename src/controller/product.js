import dotenv from "dotenv";
// import axios from "axios";
import Joi, { string } from "joi";
import Product from "../models/product.js"
dotenv.config()

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    DeScription: Joi.string(),
})
export const getalll = async (res, rep) => {

    try {
        // const { data: product } = await axios.get(`${process.env.API_URL}/product`)
        const product = await Product.find();
        if (product.length === 0) {
            return rep.status(400).json({
                messgae: "Không có sản phẩm nào  "
            })

        }
        rep.json({
            messgae: "lấy thành công",
            product,
        })

    } catch (error) {
        rep.status(400).json({
            messgae: error
        })
    }

}
export const get = async (res, rep) => {
    try {
        // const { data: product } = await axios.get(`${process.env.API_URL}/product/${res.params.id}`);
        const product = await Product.findById(res.params.id);
        if (!product) {
            return rep.status(400).json({
                messgae: "Không  sản phẩm nào  "
            })

        }
        rep.json({
            messgae: "lấy thành công",
            product,
        })

    } catch (error) {
        rep.status(400).json({
            messgae: "Lây thât Bại"
        })
    }

}
export const deleteproduct = async (res, rep) => {
    try {
        // const { data: product } = await axios.delete(`${process.env.API_URL}/product/${res.params.id}`,
        //     res.body,

        // )
        const product = await Product.findOneAndDelete(res.params.id)
        rep.json({
            messgae: "xoa thành Công",
            product,
        })
    } catch (error) {
        rep.startus(400).json({
            messgae: "xoa that bai"
        })
    }

}
export const addproduct = async (res, rep) => {
    const { error } = productSchema.validate(res.body);
    if (error) {
        return rep.status(400).json({
            messgae: error.details[0].message,
        })
    }
    try {
        // const { data: product } = await axios.post(`${process.env.API_URL}/product`,
        //     res.body,

        // );
        const product = await Product.create(res.body);
        if (!product) {
            return rep.status(400).json({
                messgae: "Không  sản phẩm nào  "
            })

        }
        return rep.json({
            messgae: "Thêm thành Công",
            product,
        });


    } catch (error) {
        rep.status(400).json({
            messgae: "Thêm thất bại "
        })
    }

}
export const updateproduct = async (res, rep) => {
    try {
        // const { data: product } = await axios.put(`${process.env.API_URL}/product/${res.params.id}`,
        //     res.body,

        // )
        const product = await Product.findOneAndUpdate({ _id: res.params.id }, res.body, { new: true })
        if (!product) {
            return rep.status(400).json({
                messgae: "Không  sản phẩm nào  "
            })

        }
        rep.json({
            messgae: "cập nhật thành Công",
            product,
        })

    } catch (error) {
        rep.startus(400).json({
            messgae: "Cập nhật thất bại "
        })
    }

}