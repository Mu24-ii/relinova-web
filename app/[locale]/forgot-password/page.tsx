'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكنك وضع منطق إرسال رابط استعادة كلمة المرور
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1628] flex items-center justify-center px-6 py-12" dir="rtl">
      <div className="max-w-md w-full bg-[#142238] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
        
        {/* العنوان */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">استعادة كلمة المرور</h2>
          <p className="text-sm text-[#B8C2D1]">
            أدخل بريدك الإلكتروني المسجل وسنرسل لك تعليمات إعادة تعيين كلمة المرور.
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-6">
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
              تم إرسال تعليمات الاستعادة إلى بريدك الإلكتروني بنجاح. يرجى التحقق من صندوق الوارد.
            </div>
            <Link 
              href="/signin" 
              className="block w-full bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] py-4 rounded-xl font-bold transition-all shadow-lg text-center text-base"
            >
              العودة لتسجيل الدخول
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">البريد الإلكتروني</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" 
                required
                className="w-full p-4 rounded-xl bg-[#0B1628] border border-white/10 text-white placeholder-[#B8C2D1]/40 focus:outline-none focus:border-[#D9A62E] transition-colors shadow-inner"
              />
            </div>

            {/* زر الإرسال */}
            <button 
              type="submit"
              className="w-full bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] py-4 rounded-xl font-bold transition-all shadow-lg text-base cursor-pointer"
            >
              إرسال رابط الاستعادة
            </button>

            {/* العودة لتسجيل الدخول */}
            <div className="text-center text-sm text-[#B8C2D1] pt-4 border-t border-white/10">
              تذكرت كلمة المرور؟{' '}
              <Link href="/signin" className="text-[#D9A62E] font-bold hover:underline">
                تسجيل الدخول
              </Link>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}