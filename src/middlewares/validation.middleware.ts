import { Request, Response, NextFunction } from "express";
import { ProductSchema } from "../validators/product.validator";
import { OrderSchema } from "../validators/order.validator";

export const validateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = ProductSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const validateOrder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = OrderSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
