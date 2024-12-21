import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import ProductRoutes from "./routes/product.route.js"
const app=express();
dotenv.config()
const port =process.env.PORT || 3000;
const __dirname = path.resolve();
app.use(express.json());

app.use("/api/products",ProductRoutes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    );
    }

app.listen(port, () => {
    connectDB();
    console.log("Server started at localhost:3000");
});
