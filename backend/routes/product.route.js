import express from "express"
import { updateProduct,deleteProduct,createProduct, getProducts } from "../controllers/controller.product.js";

const router=express.Router();


router.get("/",getProducts);
router.put("/:id",updateProduct);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);
export default router;
