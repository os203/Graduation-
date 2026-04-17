import { z } from "zod";

/**
 * Registration validation schema
 * Verified and updated to resolve Zod deprecation warnings
 */
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
    
  email: z
    .string()
    .email({ message: "Invalid email address format" }), 
    
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

/**
 * Login validation schema
 */
export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" }),
    
  password: z
    .string()
    .min(1, { message: "Password is required" }),
});