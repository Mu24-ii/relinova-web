import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, country, password } = body;

    if (!firstName || !lastName || !email || !phone || !country || !password) {
      return NextResponse.json(
        { success: false, message: 'جميع الحقول مطلوبة.' },
        { status: 400 }
      );
    }

    if (phone.length !== 10) {
      return NextResponse.json(
        { success: false, message: 'رقم الهاتف يجب أن يكون 10 أرقام.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'تم تسجيل الحساب بنجاح في نظام المنصة!',
        user: { firstName, lastName, email, country }
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في الخادم (Server Error).' },
      { status: 500 }
    );
  }
}