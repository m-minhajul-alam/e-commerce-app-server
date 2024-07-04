import Product from "../models/product.model";
import { ProductInput } from "../validators/product.validator";

class ProductService {
  async createProduct(data: ProductInput) {
    const product = new Product(data);
    return product.save();
  }

  async getAllProducts() {
    return Product.find();
  }

  async getProductById(productId: string) {
    return Product.findById(productId);
  }

  async updateProduct(productId: string, data: ProductInput) {
    return Product.findByIdAndUpdate(productId, data, { new: true });
  }

  async deleteProduct(productId: string) {
    return Product.findByIdAndDelete(productId);
  }
}

export default new ProductService();
