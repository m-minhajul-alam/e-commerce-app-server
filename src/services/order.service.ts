import Order from "../models/order.model";
import Product from "../models/product.model";
import { OrderInput } from "../validators/order.validator";

class OrderService {
  async createOrder(data: OrderInput) {
    const product = await Product.findById(data.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    if (product.inventory.quantity < data.quantity) {
      throw new Error("Insufficient quantity available in inventory");
    }

    product.inventory.quantity -= data.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();

    const order = new Order(data);
    return order.save();
  }

  async getAllOrders() {
    return Order.find();
  }

  async getOrdersByEmail(email: string) {
    return Order.find({ email });
  }
}

export default new OrderService();
