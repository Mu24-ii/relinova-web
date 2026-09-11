import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // اللغات التي يدعمها موقعك
  locales: ['en', 'ar'],
  
  // تعديل: اللغة الافتراضية يجب أن تكون 'ar' لأن موقعك عربي
  defaultLocale: 'ar',

  // إضافة هامة جداً لمنع التداخل في المسارات
  localePrefix: 'always' 
});

// تصدير الأدوات
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);