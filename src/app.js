// const htttp = require("http");
// const products = [
//     { id: 1, name: "luong" },
//     { id: 2, name: "thanh" }
// ]
// const server = htttp.createServer(function (req, res) {
//     if (req.url === "/") {
//         res.end("homepage");
//     }
//     if (req.url === "/api/products") {
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(products));
//     }
// });
// server.listen(8080, function () {
//     console.log("server listening on");
// });

import express from "express";

import productRouter from "./routers/product"
import authRouter from "./routers/auth"
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();
dotenv.config()



app.use(express.json());

app.use("/api", productRouter);
app.use("/api", authRouter);

// app.listen(process.env.PORT, () => {
//     console.log("listening on ");
// })
mongoose.connect("mongodb://127.0.0.1:27017/we17302");
export const viteNodeApp = app;