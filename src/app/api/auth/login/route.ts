import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { comparePasswords, signAccessToken, signRefreshToken } from '@/lib/auth';
import { loginSchema } from '@/lib/validations/auth'; 

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. التحقق من صحة المدخلات (Zod Validation)
    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message }, 
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    // 2. البحث عن المستخدم في قاعدة البيانات (PG Academy DB)
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' }, 
        { status: 401 }
      );
    }

    // 3. التحقق من مطابقة كلمة المرور المشفرة
    const isMatch = await comparePasswords(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' }, 
        { status: 401 }
      );
    }

    // 4. تجهيز بيانات التوكن (Payload)
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    // 5. توليد التوكنات
    const accessToken = await signAccessToken(tokenPayload);
    const refreshToken = await signRefreshToken(tokenPayload);

    // 6. إرسال الرد وضبط الكوكيز (HttpOnly)
    const response = NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: accessToken
    });

    response.cookies.set({
      name: 'refresh_token',
      value: refreshToken,
      httpOnly: true, // حماية من سرقة التوكن عبر JavaScript
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // أسبوع واحد
    });

    return response;

  } catch (error: unknown) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ داخلي في الخادم' }, 
      { status: 500 }
    );
  }
}