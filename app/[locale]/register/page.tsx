'use client';

import { use } from 'react';
import Link from 'next/link';

export default function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;

  return (
    <main className="min-h-screen bg-[#0B1628] flex items-center justify-center py-12 px-6 w-full text-white" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-xl w-full bg-[#142238] rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10">
        
        {/* هيدر النموذج */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {locale === 'ar' ? 'إنشاء حساب جديد' : 'Create New Account'}
          </h1>
          <p className="text-[#B8C2D1] text-sm">
            {locale === 'ar' 
              ? 'سجل بياناتك للانضمام إلى المنصة وتسجيل الدورات أو الاشتراكات.' 
              : 'Register your details to join the platform and enroll in courses or subscriptions.'}
          </p>
        </div>

        {/* نموذج التسجيل */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'الاسم الأول' : 'First Name'}
              </label>
              <input 
                type="text" 
                placeholder={locale === 'ar' ? 'مثال: متعب' : 'e.g., Muteb'}
                className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm text-white bg-[#0B1628] placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'الاسم الأخير' : 'Last Name'}
              </label>
              <input 
                type="text" 
                placeholder={locale === 'ar' ? 'اسم العائلة' : 'Last Name'}
                className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm text-white bg-[#0B1628] placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-1">
              {locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm text-white bg-[#0B1628] placeholder:text-gray-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
              </label>
              <input 
                type="tel" 
                placeholder="05xxxxxxxx"
                className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm text-white bg-[#0B1628] placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'الدولة' : 'Country'}
              </label>
              <input 
                type="text" 
                placeholder={locale === 'ar' ? 'مثال: المملكة العربية السعودية' : 'e.g., Saudi Arabia'}
                className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm text-white bg-[#0B1628] placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'كلمة المرور' : 'Password'}
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm text-white bg-[#0B1628] placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'إعادة كلمة المرور' : 'Confirm Password'}
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm text-white bg-[#0B1628] placeholder:text-gray-500"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-4 py-3.5 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold rounded-xl shadow-lg transition-all duration-300 text-center cursor-pointer"
          >
            {locale === 'ar' ? 'تسجيل' : 'Register'}
          </button>
        </form>

        {/* تذيل النموذج */}
        <div className="mt-6 text-center text-sm text-[#B8C2D1] border-t border-white/10 pt-4">
          {locale === 'ar' ? 'لديك حساب بالفعل؟ ' : 'Already have an account? '}
          <Link href={`/${locale}/signin`} className="text-[#D9A62E] font-bold hover:underline">
            {locale === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
          </Link>
        </div>

      </div>
    </main>
  );
}