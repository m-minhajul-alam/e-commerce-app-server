import { Request, Response } from "express";
import OrderService from "../services/order.service";
import { OrderInput } from "../validators/order.validator";

class OrderController {
  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const orderInput: OrderInput = req.body;
      const order = await OrderService.createOrder(orderInput);
      res.status(201).json({
        success: true,
        message: "Order created successfully!",
        data: order,
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

  async getAllOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: orders,
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

  async getOrdersByEmail(req: Request, res: Response): Promise<void> {
    try {
      const email = req.query.email as string;
      const orders = await OrderService.getOrdersByEmail(email);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: orders,
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

export default new OrderController();
