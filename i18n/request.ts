import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // هذا السطر يضمن جلب اللغة المطلوبة
  let locale = await requestLocale;

  // التحقق من أن اللغة موجودة في قائمة اللغات المدعومة
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // تأكد أن المسار إلى مجلد messages صحيح
    messages: (await import(`../messages/${locale}.json`)).default
  };
});