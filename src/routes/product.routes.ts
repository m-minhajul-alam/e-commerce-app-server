import { Router } from "express";
import ProductController from "../controllers/product.controller";
import { validateProduct } from "../middlewares/validation.middleware";

const router = Router();

router.post("/products", validateProduct, ProductController.createProduct);
router.get("/products", ProductController.getAllProducts);
router.get("/products/:productId", ProductController.getProductById);
router.put(
  "/products/:productId",
  validateProduct,
  ProductController.updateProduct
);
router.delete("/products/:productId", ProductController.deleteProduct);

export default router;
