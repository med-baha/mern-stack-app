import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts=async(req,res)=> {

    try {
        const products= await Product.find({});
        res.status(201).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({success:true,message:"server error"});
        
    }
}

export const createProduct=async(req,res)=> {
    const product=req.body;
    if (!product.name || !product.price || !product.image) {
        console.log("Missing fields");
        return res.status(400).json({ success: false, message: "Please enter all fields" });
    }
    
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        console.log("Product saved", newProduct);
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Error saving product:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
    
}
export const deleteProduct=async (req,res)=>{

    const {id} =req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message:"product deleted" });

    } catch (error) {
        res.status(404).json({ success: false, message: "product not found" });

    
    }

}
export const updateProduct=async (req,res)=>{
    const {id}=req.params;
    const product=req.body;
    if (!mongoose.isValidObjectId(id)){
        return res.status(404).json({success:false,message:"product not found"});
    }
    try {
       const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true});
       res.status(200).json({ success: true, data: updatedProduct});

    } catch (error) {
        res.status(500).json({ success: false, message: "serever error"});

        
    }



}