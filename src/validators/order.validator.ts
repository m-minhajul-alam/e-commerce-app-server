import Joi from "joi";

export const OrderSchema = Joi.object({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

export type OrderInput = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};
