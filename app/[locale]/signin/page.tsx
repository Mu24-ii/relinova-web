'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
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
      // تسجيل دخول ناجح، توجيه المستخدم للصفحة الرئيسية أو لوحة التحكم
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6 py-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full bg-primary-hover border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
        
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
              className="w-full p-4 rounded-xl bg-primary border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors shadow-inner"
            />
          </div>

          {/* كلمة المرور */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">{isArabic ? 'كلمة المرور' : 'Password'}</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required
              className="w-full p-4 rounded-xl bg-primary border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors shadow-inner"
            />
          </div>

          {/* تذكرني ورابط نسيت كلمة المرور */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-300">
              <input type="checkbox" className="rounded bg-primary border-white/10 text-accent focus:ring-0" />
              <span>{isArabic ? 'تذكرني' : 'Remember me'}</span>
            </label>

            <Link 
              href="/forgot-password" 
              className="text-accent hover:text-accent-hover font-semibold transition-colors"
            >
              {isArabic ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
            </Link>
          </div>

          {/* زر تسجيل الدخول */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-hover text-primary py-4 rounded-xl font-bold transition-all shadow-lg text-base cursor-pointer disabled:opacity-50"
          >
            {loading 
              ? (isArabic ? 'جاري تسجيل الدخول...' : 'Signing in...') 
              : (isArabic ? 'تسجيل الدخول' : 'Sign In')}
          </button>
        </form>

        {/* تذيل النموذج (إنشاء حساب جديد) */}
        <div className="mt-8 text-center text-sm text-gray-300 border-t border-white/10 pt-6">
          {isArabic ? 'ليس لديك حساب؟ ' : "Don't have an account? "}
          <Link href="/register" className="text-accent font-bold hover:underline">
            {isArabic ? 'تسجيل حساب جديد' : 'Sign Up'}
          </Link>
        </div>

      </div>
    </div>
  );
}