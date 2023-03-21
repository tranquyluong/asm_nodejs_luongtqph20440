import express from "express";
import { getalll, get, addproduct, deleteproduct, updateproduct } from "../controller/product";
const router = express.Router();
router.get("/products", getalll);
router.delete("/products/:id", deleteproduct);
router.get("/products/:id", get);
router.put("/products/:id", updateproduct);
router.post("/products", addproduct);
export default router