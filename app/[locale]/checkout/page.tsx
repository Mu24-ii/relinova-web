'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { ShieldCheck, CreditCard, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const searchParams = useSearchParams();
  const courseName = searchParams.get('course') || 'preventive-maintenance';

  // تنسيق اسم الدورة للعرض
  const formattedCourseName = courseName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-[#0B1628] text-white flex items-center justify-center py-12 px-6" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full bg-[#142238] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-8">
        
        {/* تأثير جمالي في الخلفية */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* أيقونة العنوان العلوي */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#D9A62E]/20 text-[#D9A62E] border border-[#D9A62E]/30 mb-1">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            {isArabic ? 'إتمام الاشتراك في الدورة' : 'Complete Course Enrollment'}
          </h1>
          <p className="text-xs text-[#B8C2D1] leading-relaxed max-w-xs mx-auto">
            {isArabic 
              ? 'أنت على وشك فتح المحتوى الكامل، والرسوم لجميع وحدات ومختبرات الدورة.'
              : 'You are about to unlock full access to all course modules and materials.'
            }
          </p>
        </div>

        {/* صندوق تفاصيل الدورة والسعر */}
        <div className="bg-[#0b1628] border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-center text-xs text-[#B8C2D1] border-b border-white/5 pb-3">
            <span>{isArabic ? 'الدورة المشتركة:' : 'Selected Course:'}</span>
            <span className="font-bold text-[#D9A62E] uppercase">{formattedCourseName}</span>
          </div>

          <div className="flex justify-between items-center pt-1">
            <span className="text-xs text-[#B8C2D1]">{isArabic ? 'إجمالي السعر:' : 'Total Price:'}</span>
            <div className="text-lg font-black text-white flex items-center gap-1">
              <span>299</span>
              <span className="text-xs text-[#D9A62E]">SAR</span>
            </div>
          </div>
        </div>

        {/* أزرار الإجراءات */}
        <div className="space-y-3 pt-2">
          <button 
            onClick={() => alert(isArabic ? 'تم تفعيل الدورة بنجاح (تجريبي)' : 'Course activated successfully (Demo)')}
            className="w-full bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isArabic ? 'تأكيد الدفع وفتح الدورة (تجريبي)' : 'Confirm Payment & Unlock (Demo)'}</span>
          </button>

          <Link 
            href="/courses"
            className="w-full bg-transparent hover:bg-white/5 text-[#B8C2D1] hover:text-white font-medium py-3 px-6 rounded-xl text-xs transition-all border border-white/10 flex items-center justify-center gap-2"
          >
            {isArabic ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{isArabic ? 'إلغاء والعودة' : 'Cancel & Return'}</span>
          </Link>
        </div>

        {/* ملاحظة سفلية */}
        <p className="text-[10px] text-center text-[#B8C2D1]/60">
          {isArabic ? 'معاملة دفع آمنة 100% لأغراض بيئة الاختبار التجريبية.' : '100% secure payment transaction for testing environment.'}
        </p>

      </div>
    </main>
  );
}