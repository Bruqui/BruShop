import express from "express"
import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/productController.js"
import uqload from "../middleware/multer.js"

const productRouter = express.Router()

productRouter.post("/add", uqload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addProduct)
productRouter.post("/remove", removeProduct)
productRouter.post("/single", singleProduct)
productRouter.get("/list", listProduct)

export default productRouter