import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { hashPassword, signAccessToken, signRefreshToken } from '@/lib/auth';
import { registerSchema } from '@/lib/validations/auth'; // استيراد الـ Schema اللي عملناه

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validation = registerSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message }, 
        { status: 400 }
      );
    }


    const { name, email, password } = validation.data;

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'هذا البريد الإلكتروني مسجل بالفعل' }, 
        { status: 409 }
      );
    }

    // 3. تشفير كلمة المرور
    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'STUDENT',
      },
    });

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = await signAccessToken(tokenPayload);
    const refreshToken = await signRefreshToken(tokenPayload);

   
    const response = NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: accessToken
    }, { status: 201 });

    response.cookies.set({
      name: 'refresh_token',
      value: refreshToken,
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, 
    });

    return response;

  } catch (error: unknown) {
    console.error('Registration Error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ داخلي في الخادم' }, 
      { status: 500 }
    );
  }
}