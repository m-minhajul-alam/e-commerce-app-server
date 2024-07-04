import Joi from "joi";

export const ProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().required(),
        value: Joi.string().required(),
      })
    )
    .required(),
  inventory: Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required(),
  }).required(),
});

export type ProductInput = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: { type: string; value: string }[];
  inventory: { quantity: number; inStock: boolean };
};
