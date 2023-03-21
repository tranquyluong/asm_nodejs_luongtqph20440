
import dotenv from "dotenv";
import axios from "axios";
import joi from "joi";

dotenv.config();

const uathchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()

})
export const signup = async (res, rep) => {
    const { error } = uathchema.validate(res.body);
    console.log(error);
    if (error) {
        return rep.status(400).json({
            messgae: error.details[0].message,
        })
    }
    try {
        const { data: user } = await axios.post(`${process.env.API_URL}/signup`, res.body);

        if (!user) {
            return rep.status(400).json({
                messgae: " Tạo tài Khoản không thành Công"
            })

        }
        return rep.json({
            messgae: "Tạo tài Khoản  thành Công",
            user,
        });


    } catch (error) {
        rep.status(400).json({
            messgae: error
        })
    }

};

export const login = async (res, rep) => {
    const { error } = uathchema.validate(res.body);
    console.log(error);
    if (error) {
        return rep.status(400).json({
            messgae: error.details[0].message,
        })
    }
    try {
        const { data: user } = await axios.post(`${process.env.API_URL}/login`, res.body);

        return rep.json({
            messgae: "Đăng nhập thành Công",
            user,
        });


    } catch (error) {
        rep.status(400).json({
            messgae: error
        })
    }

}