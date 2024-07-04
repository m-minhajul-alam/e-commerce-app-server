import { Request, Response } from "express";
import ProductService from "../services/product.service";
import { ProductInput } from "../validators/product.validator";

class ProductController {
  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const productInput: ProductInput = req.body;
      const product = await ProductService.createProduct(productInput);
      res.status(201).json({
        success: true,
        message: "Product created successfully!",
        data: product,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ success: false, message: error.message });
      } else {
        res
          .status(400)
          .json({ success: false, message: "An unknown error occurred." });
      }
    }
  }

  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: products,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ success: false, message: error.message });
      } else {
        res
          .status(400)
          .json({ success: false, message: "An unknown error occurred." });
      }
    }
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.productId;
      const product = await ProductService.getProductById(productId);
      if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
      } else {
        res.status(200).json({
          success: true,
          message: "Product fetched successfully!",
          data: product,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ success: false, message: error.message });
      } else {
        res
          .status(400)
          .json({ success: false, message: "An unknown error occurred." });
      }
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.productId;
      const productInput: ProductInput = req.body;
      const updatedProduct = await ProductService.updateProduct(
        productId,
        productInput
      );
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: updatedProduct,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ success: false, message: error.message });
      } else {
        res
          .status(400)
          .json({ success: false, message: "An unknown error occurred." });
      }
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.productId;
      await ProductService.deleteProduct(productId);
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ success: false, message: error.message });
      } else {
        res
          .status(400)
          .json({ success: false, message: "An unknown error occurred." });
      }
    }
  }
}

export default new ProductController();
