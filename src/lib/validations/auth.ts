import { z } from "zod";

/**
 * Registration validation schema
 * Verified and updated to resolve Zod deprecation warnings
 */
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "يجب أن يتكون الاسم من حرفين على الأقل" })
    .max(50, { message: "لا يمكن أن يتجاوز الاسم 50 حرفاً" }),
    
  email: z
    .string()
    .email({ message: "صيغة البريد الإلكتروني غير صالحة" }), 
    
  password: z
    .string()
    .min(8, { message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل" })
    .regex(/[A-Z]/, { message: "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل" })
    .regex(/[0-9]/, { message: "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل" }),
});

/**
 * Login validation schema
 */
export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "صيغة البريد الإلكتروني غير صالحة" }),
    
  password: z
    .string()
    .min(1, { message: "كلمة المرور مطلوبة" }),
});