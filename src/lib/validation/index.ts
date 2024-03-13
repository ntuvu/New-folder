import { z } from "zod";

export const signUpValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Too short" })
    .max(50, { message: "Too long" }),
  username: z
    .string()
    .min(2, { message: "Too short" })
    .max(50, { message: "Too long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password mus be at least 8 character" }),
});
