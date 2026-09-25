'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { createClient } from '@/utils/supabase/client'; 
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else {
      router.push(`/${locale}`);
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-[#09111e] flex items-center justify-center px-6 py-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full bg-[#111c30] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
        
        {/* العنوان */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{isArabic ? 'تسجيل الدخول' : 'Sign In'}</h2>
          <p className="text-sm text-gray-300">
            {isArabic ? 'أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى حسابك.' : 'Enter your email and password to access your account.'}
          </p>
        </div>

        {/* عرض رسالة الخطأ إن وجدت */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* البريد الإلكتروني */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">{isArabic ? 'البريد الإلكتروني' : 'Email Address'}</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com" 
              required
              className="w-full p-4 rounded-xl bg-[#09111e] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#D9A62E] transition-colors shadow-inner"
            />
          </div>

          {/* كلمة المرور مع زر إظهار/إخفاء بلون تفاعلي */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">{isArabic ? 'كلمة المرور' : 'Password'}</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                required
                className={`w-full p-4 ${isArabic ? 'pl-12' : 'pr-12'} rounded-xl bg-[#09111e] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#D9A62E] transition-colors shadow-inner`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute inset-y-0 ${isArabic ? 'left-4' : 'right-4'} flex items-center transition-colors focus:outline-none ${
                  showPassword ? 'text-[#D9A62E]' : 'text-gray-400 hover:text-white'
                }`}
                aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              >
                {showPassword ? (
                  // أيقونة العين المفتوحة (تظهر باللون الذهبي عند التفعيل)
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(217,166,46,0.4)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  // أيقونة العين المغلقة في الوضع العادي
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* تذكرني ورابط نسيت كلمة المرور */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-300">
              <input type="checkbox" className="rounded bg-[#09111e] border-white/10 text-[#D9A62E] focus:ring-0" />
              <span>{isArabic ? 'تذكرني' : 'Remember me'}</span>
            </label>

            <Link 
              href={`/${locale}/forgot-password`} 
              className="text-[#D9A62E] hover:underline font-semibold transition-colors"
            >
              {isArabic ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
            </Link>
          </div>

          {/* زر تسجيل الدخول */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#D9A62E] hover:bg-[#c29328] text-[#09111e] py-4 rounded-xl font-bold transition-all shadow-lg text-base cursor-pointer disabled:opacity-50"
          >
            {loading 
              ? (isArabic ? 'جاري تسجيل الدخول...' : 'Signing in...') 
              : (isArabic ? 'تسجيل الدخول' : 'Sign In')}
          </button>
        </form>

        {/* تذيل النموذج (إنشاء حساب جديد) */}
        <div className="mt-8 text-center text-sm text-gray-300 border-t border-white/10 pt-6">
          {isArabic ? 'ليس لديك حساب؟ ' : "Don't have an account? "}
          <Link href={`/${locale}/register`} className="text-[#D9A62E] font-bold hover:underline">
            {isArabic ? 'تسجيل حساب جديد' : 'Sign Up'}
          </Link>
        </div>

      </div>
    </div>
  );
}