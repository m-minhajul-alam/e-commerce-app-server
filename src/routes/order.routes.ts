import { Router } from "express";
import OrderController from "../controllers/order.controller";
import { validateOrder } from "../middlewares/validation.middleware";

const router = Router();

router.post("/orders", validateOrder, OrderController.createOrder);
router.get("/orders", OrderController.getAllOrders);
router.get("/orders", OrderController.getOrdersByEmail);

export default router;
