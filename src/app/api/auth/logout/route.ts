import { NextResponse } from 'next/server';

/**
 * Terminate user session by clearing authentication cookies
 */
export async function POST() {
  try {
    const response = NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );

    // Invalidate refresh token by setting expiry to epoch
    response.cookies.set('refresh_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: new Date(0), 
      path: '/', 
    });

    return response;
  } catch (error) {
    console.error('[AUTH_LOGOUT_ERROR]:', error);
    return NextResponse.json(
      { error: "Failed to process logout" },
      { status: 500 }
    );
  }
}