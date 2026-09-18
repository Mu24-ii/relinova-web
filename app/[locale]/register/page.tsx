'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const COUNTRIES = [
  { ar: 'المملكة العربية السعودية', en: 'Saudi Arabia' },
  { ar: 'الإمارات العربية المتحدة', en: 'United Arab Emirates' },
  { ar: 'الكويت', en: 'Kuwait' },
  { ar: 'قطر', en: 'Qatar' },
  { ar: 'البحرين', en: 'Bahrain' },
  { ar: 'عمان', en: 'Oman' },
  { ar: 'الأردن', en: 'Jordan' },
  { ar: 'مصر', en: 'Egypt' },
  { ar: 'العراق', en: 'Iraq' },
  { ar: 'المغرب', en: 'Morocco' },
  { ar: 'الجزائر', en: 'Algeria' },
  { ar: 'تونس', en: 'Tunisia' },
  { ar: 'ليبيا', en: 'Libya' },
  { ar: 'السودان', en: 'Sudan' },
  { ar: 'سوريا', en: 'Syria' },
  { ar: 'اليمن', en: 'Yemen' },
  { ar: 'لبنان', en: 'Lebanon' },
  { ar: 'فلسطين', en: 'Palestine' },
  { ar: 'الولايات المتحدة', en: 'United States' },
  { ar: 'المملكة المتحدة', en: 'United Kingdom' },
  { ar: 'كندا', en: 'Canada' },
  { ar: 'ألمانيا', en: 'Germany' },
  { ar: 'فرنسا', en: 'France' },
  { ar: 'إيطاليا', en: 'Italy' },
  { ar: 'إسبانيا', en: 'Spain' },
  { ar: 'تركيا', en: 'Turkey' },
  { ar: 'كوريا الشمالية', en: 'North Korea' },
  { ar: 'كوريا الجنوبية', en: 'South Korea' },
  { ar: 'اليابان', en: 'Japan' },
  { ar: 'الصين', en: 'China' },
  { ar: 'الهند', en: 'India' },
  { ar: 'باكستان', en: 'Pakistan' },
  { ar: 'أستراليا', en: 'Australia' },
  { ar: 'البرازيل', en: 'Brazil' },
  { ar: 'أرجنتين', en: 'Argentina' },
  { ar: 'روسيا', en: 'Russia' },
  { ar: 'جنوب إفريقيا', en: 'South Africa' },
];

export default function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [generalError, setGeneralError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  // دالة الإرسال والاتصال بالخلفية جاهزة بالكامل هنا داخله
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');
    
    const newErrors: { [key: string]: boolean } = {};

    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone || formData.phone.length !== 10) newErrors.phone = true;
    if (!formData.country) newErrors.country = true;
    if (!formData.password || formData.password.length < 6) newErrors.password = true;
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) newErrors.confirmPassword = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setGeneralError(
        locale === 'ar' 
          ? '⚠️ يرجى تصحيح الحقول المحددة بالأحمر (تأكد أن رقم الهاتف 10 أرقام بالضبط).' 
          : '⚠️ Please correct highlighted fields (Phone number must be exactly 10 digits).'
      );
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setGeneralError(data.message || 'حدث خطأ ما.');
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push(`/${locale}/verify-account`);
      }, 1500);

    } catch (err) {
      setGeneralError(locale === 'ar' ? '⚠️ تعذر الاتصال بالخادم.' : '⚠️ Server connection failed.');
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1628] flex items-center justify-center py-12 px-6 w-full text-white" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-xl w-full bg-[#142238] rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10">
        
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

        {generalError && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
            {generalError}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center">
            {locale === 'ar' ? '🎉 تم التسجيل بنجاح! جاري الانتقال لصفحة التوثيق...' : '🎉 Registration successful! Redirecting...'}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'الاسم الأول' : 'First Name'}
              </label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={locale === 'ar' ? 'مثال: متعب' : 'e.g., Muteb'}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-[#0B1628] placeholder:text-gray-500 focus:outline-none ${
                  errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D9A62E]'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'الاسم الأخير' : 'Last Name'}
              </label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={locale === 'ar' ? 'اسم العائلة' : 'Last Name'}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-[#0B1628] placeholder:text-gray-500 focus:outline-none ${
                  errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D9A62E]'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-1">
              {locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input 
              type="text" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-[#0B1628] placeholder:text-gray-500 focus:outline-none ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D9A62E]'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'رقم الهاتف (10 أرقام)' : 'Phone Number (10 digits)'}
              </label>
              <input 
                type="tel" 
                name="phone"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="05xxxxxxxx"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-[#0B1628] placeholder:text-gray-500 focus:outline-none ${
                  errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D9A62E]'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'الدولة' : 'Country'}
              </label>
              <select 
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-[#0B1628] focus:outline-none ${
                  errors.country ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D9A62E]'
                }`}
              >
                <option value="" disabled className="text-gray-500">
                  {locale === 'ar' ? 'اختر الدولة' : 'Select Country'}
                </option>
                {COUNTRIES.map((c, index) => (
                  <option key={index} value={locale === 'ar' ? c.ar : c.en} className="bg-[#0B1628] text-white">
                    {locale === 'ar' ? c.ar : c.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'كلمة المرور' : 'Password'}
              </label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-[#0B1628] placeholder:text-gray-500 focus:outline-none ${
                  errors.password ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D9A62E]'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'إعادة كلمة المرور' : 'Confirm Password'}
              </label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-[#0B1628] placeholder:text-gray-500 focus:outline-none ${
                  errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D9A62E]'
                }`}
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