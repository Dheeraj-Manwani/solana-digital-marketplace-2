import { z } from "zod";

export const Product = z.object({
  id: z.number(),
  title: z
    .string()
    .min(5, { message: "Product title should have atleast 5 characters." }),
  description: z.string().optional(),
  cost: z
    .number({ message: "Cost is required" })
    .min(0.05, { message: "Cost can be 0.05 SOL at minimum" }),
  images: z
    .array(z.string())
    .min(1, { message: "Atleast one image is requried" }),
});
