import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'البريد الإلكتروني وكلمة المرور مطلوبان.' },
        { status: 400 }
      );
    }

    // [ملاحظة مستقبلية]: هنا يتم التحقق من بيانات المستخدم من قاعدة البيانات (مثل Supabase)
    // حالياً كمحاكاة ناجحة:
    return NextResponse.json(
      { 
        success: true, 
        message: 'تم تسجيل الدخول بنجاح!',
        user: { email }
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في الخادم (Server Error).' },
      { status: 500 }
    );
  }
}