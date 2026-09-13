import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const maintenanceMode = false; // خليه true لوضع الصيانة، وfalse لإعادة فتح الموقع

  if (maintenanceMode) {
    // ميزة الدخول السريع لك أنت للاختبار: ?bypass=muteb123
    const bypassToken = request.nextUrl.searchParams.get('bypass');
    const hasCookie = request.cookies.get('relinova_admin');

    if (bypassToken === 'muteb123' || hasCookie) {
      const response = handleI18nRouting(request);
      response.cookies.set('relinova_admin', 'true', { maxAge: 60 * 60 * 24 });
      return response;
    }

    // صفحة الصيانة مطابقة تماماً لجدول ألوان الهوية (Navy & Metallic Gold)
    return new NextResponse(
      `<!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ReliNova - تحت الصيانة</title>
          <style>
              body {
                  margin: 0;
                  padding: 0;
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: #0B1628;
                  color: #FFFFFF;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  text-align: center;
              }
              .maintenance-container {
                  max-width: 550px;
                  padding: 50px 40px;
                  background: #1B2D46;
                  border: 1px solid #142238;
                  border-radius: 16px;
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
              }
              .logo-text {
                  font-size: 30px;
                  font-weight: bold;
                  color: #D9A62E;
                  margin-bottom: 15px;
                  letter-spacing: 1px;
              }
              .badge {
                  display: inline-block;
                  background-color: rgba(217, 166, 46, 0.1);
                  color: #F2C75C;
                  padding: 6px 18px;
                  border-radius: 20px;
                  font-size: 14px;
                  font-weight: 600;
                  margin-bottom: 25px;
                  border: 1px solid rgba(217, 166, 46, 0.3);
              }
              h1 {
                  font-size: 22px;
                  color: #FFFFFF;
                  margin-bottom: 15px;
              }
              p {
                  color: #B8C2D1;
                  font-size: 16px;
                  line-height: 1.7;
                  margin: 0;
              }
          </style>
      </head>
      <body>
          <div class="maintenance-container">
              <div class="logo-text">ReliNova</div>
              <div class="badge">نعتذر عن الإزعاج</div>
              <h1>المنصة تخضع للصيانة حالياً</h1>
              <p>نحن نعمل على تحديث وتطوير المنصة لتقديم أفضل تجربة تدريبية وهندسية ممكنة. سنعود للعمل قريباً جداً.</p>
          </div>
      </body>
      </html>`,
      {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*']
}