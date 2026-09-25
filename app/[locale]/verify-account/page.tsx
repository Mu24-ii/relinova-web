'use client';

import React, { useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, RefreshCw } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

function VerifyAccountContent({ locale }: { locale: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const supabase = createClient();

  // التعامل مع كتابة الأرقام والانتقال التلقائي بين المربعات الـ 6
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // السماح للأرقام فقط

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // الانتقال التلقائي للمربع التالي عند الكتابة
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // التعامل مع زر الرجوع (Backspace)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  // لصق الرمز دفعة واحدة
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (!/^\d{6}$/.test(pastedData)) return;

    const newOtp = pastedData.split('');
    setOtp(newOtp);
    inputRefs.current[5]?.focus();
  };

  // التحقق من الرمز عبر Supabase
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      setError(locale === 'ar' ? '⚠️ يرجى إدخال الرمز كاملاً (6 أرقام).' : '⚠️ Please enter the full 6-digit code.');
      return;
    }

    if (!email) {
      setError(locale === 'ar' ? '⚠️ البريد الإلكتروني غير موجود، يرجى التسجيل مجدداً.' : '⚠️ Email not found, please register again.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otpCode,
        type: 'signup',
      });

      if (error) throw error;

      setMessage(locale === 'ar' ? '🎉 تم توثيق الحساب بنجاح! جاري تحويلك...' : '🎉 Account verified successfully! Redirecting...');
      setTimeout(() => {
        router.push(`/${locale}/signin`);
      }, 1500);

    } catch (err: any) {
      setError(err.message || (locale === 'ar' ? 'فشل التحقق من الرمز، تأكد من صحته.' : 'Verification failed. Please check your code.'));
    } finally {
      setLoading(false);
    }
  };

  // إعادة إرسال الرمز
  const handleResendCode = async () => {
    if (!email) {
      setError(locale === 'ar' ? '⚠️ البريد الإلكتروني غير متوفر.' : '⚠️ Email not available.');
      return;
    }

    setResending(true);
    setError(null);
    setMessage(null);

    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
      });

      if (error) throw error;
      setMessage(locale === 'ar' ? '✉️ تم إعادة إرسال رمز التحقق إلى بريدك.' : '✉️ Verification code resent to your email.');
    } catch (err: any) {
      setError(err.message || (locale === 'ar' ? 'فشل إعادة إرسال الرمز.' : 'Failed to resend code.'));
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-[#142238] rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10 text-center" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-16 h-16 bg-[#D9A62E]/10 border border-[#D9A62E]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D9A62E]">
        <ShieldCheck className="w-8 h-8" />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
        {locale === 'ar' ? 'توثيق الحساب' : 'Verify Account'}
      </h1>
      <p className="text-[#B8C2D1] text-sm mb-6">
        {locale === 'ar' 
          ? 'أدخل رمز التحقق المكون من 6 أرقام المرسل إلى بريدك الإلكتروني:' 
          : 'Enter the 6-digit verification code sent to your email:'}
        <br />
        <span className="font-semibold text-white mt-1 inline-block">{email || 'example@domain.com'}</span>
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      {message && (
        <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm">
          {message}
        </div>
      )}

      <form onSubmit={handleVerify} className="space-y-6">
        {/* تصميم الـ 6 مربعات المنفصلة بهوية المنصة */}
        <div className="flex justify-center gap-2 md:gap-3" dir="ltr">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-11 h-12 md:w-12 md:h-14 text-center text-xl font-bold rounded-xl border border-white/10 bg-[#0B1628] text-white focus:border-[#D9A62E] focus:outline-none transition-all shadow-inner"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold rounded-xl shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50"
        >
          {loading 
            ? (locale === 'ar' ? 'جاري التحقق...' : 'Verifying...') 
            : (locale === 'ar' ? 'تأكيد الحساب' : 'Verify Account')}
        </button>
      </form>

      <div className="mt-6 flex flex-col items-center gap-3 text-sm text-[#B8C2D1] border-t border-white/10 pt-6">
        <button
          type="button"
          onClick={handleResendCode}
          disabled={resending}
          className="flex items-center gap-2 text-[#D9A62E] font-semibold hover:underline disabled:opacity-50 bg-transparent border-none cursor-pointer"
        >
          <RefreshCw size={16} className={resending ? 'animate-spin' : ''} />
          {locale === 'ar' ? 'إعادة إرسال الرمز' : 'Resend Code'}
        </button>

        <div>
          {locale === 'ar' ? 'العودة إلى ' : 'Back to '}
          <Link href={`/${locale}/signin`} className="text-white font-bold hover:underline">
            {locale === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function VerifyAccountPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  return (
    <main className="min-h-screen bg-[#0B1628] flex items-center justify-center py-12 px-6 w-full text-white">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <VerifyAccountContent locale={locale} />
      </Suspense>
    </main>
  );
}