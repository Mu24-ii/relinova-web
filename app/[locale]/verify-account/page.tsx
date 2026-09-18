'use client';

import { use, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { createClient } from '@/utils/supabase/client'; // استدعاء دالة الـ client الصحيحة من مشروعك

export default function VerifyAccountPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // إنشاء عميل سوبابيس داخل المكون
  const supabase = createClient();

  const emailParam = searchParams.get('email') || '';

  const [email, setEmail] = useState(emailParam);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !token) {
      setError(locale === 'ar' ? '⚠️ يرجى إدخال البريد الإلكتروني ورمز التحقق.' : '⚠️ Please enter both email and verification code.');
      return;
    }

    setLoading(type => true);

    try {
      const { error: verifyError } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'signup',
      });

      if (verifyError) throw verifyError;

      setSuccess(true);
      setTimeout(() => {
        router.push(`/${locale}/signin`);
      }, 1500);

    } catch (err: any) {
      setError(err.message || (locale === 'ar' ? 'فشل التحقق، تأكد من صحة الرمز أو البريد.' : 'Verification failed. Please check your code or email.'));
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      setError(locale === 'ar' ? '⚠️ أدخل بريدك الإلكتروني أولاً لإعادة إرسال الرمز.' : '⚠️ Enter your email first to resend code.');
      return;
    }

    try {
      const { error: resendError } = await supabase.auth.resend({
        type: 'signup',
        email,
      });

      if (resendError) throw resendError;

      alert(locale === 'ar' ? '✨ تم إعادة إرسال رمز التحقق إلى بريدك الإلكتروني.' : '✨ Verification code resent to your email.');
    } catch (err: any) {
      setError(err.message || (locale === 'ar' ? 'فشل إعادة الإرسال.' : 'Failed to resend.'));
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1628] flex items-center justify-center py-12 px-6 w-full text-white" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full bg-[#142238] rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10 text-center">
        
        <div className="w-16 h-16 bg-[#D9A62E]/10 border border-[#D9A62E]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D9A62E]">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {locale === 'ar' ? 'توثيق الحساب' : 'Verify Account'}
        </h1>
        <p className="text-[#B8C2D1] text-sm mb-6">
          {locale === 'ar' 
            ? 'الرجاء إدخال البريد الإلكتروني ورمز الـ OTP المكون من أرقام.' 
            : 'Please enter your email and the OTP verification code.'}
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm">
            {locale === 'ar' ? '🎉 تم توثيق الحساب بنجاح! جاري تحويلك...' : '🎉 Account verified successfully! Redirecting...'}
          </div>
        )}

        <form onSubmit={handleVerify} className="space-y-4 text-start">
          <div>
            <label className="block text-xs text-[#B8C2D1] mb-1">
              {locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border text-white bg-[#0B1628] placeholder:text-gray-600 border-white/10 focus:border-[#D9A62E] focus:outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-[#B8C2D1] mb-1">
              {locale === 'ar' ? 'رمز التوثيق (OTP)' : 'OTP Code'}
            </label>
            <input 
              type="text" 
              maxLength={6}
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="123456"
              className="w-full px-4 py-3 rounded-xl border text-center text-xl tracking-widest text-white bg-[#0B1628] placeholder:text-gray-600 border-white/10 focus:border-[#D9A62E] focus:outline-none"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold rounded-xl shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50 mt-2"
          >
            {loading 
              ? (locale === 'ar' ? 'جاري التحقق...' : 'Verifying...') 
              : (locale === 'ar' ? 'تأكيد الحساب' : 'Verify Account')}
          </button>
        </form>

        <div className="mt-6 text-sm text-[#B8C2D1]">
          {locale === 'ar' ? 'لم تستلم الرمز؟ ' : "Didn't receive code? "}
          <button onClick={handleResendCode} className="text-[#D9A62E] font-bold hover:underline bg-transparent border-none cursor-pointer">
            {locale === 'ar' ? 'إعادة إرسال' : 'Resend'}
          </button>
        </div>

      </div>
    </main>
  );
}