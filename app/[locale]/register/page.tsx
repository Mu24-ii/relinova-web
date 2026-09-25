'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

const COUNTRIES = [
  { ar: 'المملكة العربية السعودية', en: 'Saudi Arabia', code: '+966', placeholder: '5xxxxxxxx' },
  { ar: 'الإمارات العربية المتحدة', en: 'United Arab Emirates', code: '+971', placeholder: '50xxxxxxx' },
  { ar: 'الكويت', en: 'Kuwait', code: '+965', placeholder: '5xxxxxxxx' },
  { ar: 'قطر', en: 'Qatar', code: '+974', placeholder: '5xxxxxxxx' },
  { ar: 'البحرين', en: 'Bahrain', code: '+973', placeholder: '3xxxxxxxx' },
  { ar: 'عمان', en: 'Oman', code: '+968', placeholder: '9xxxxxxxx' },
  { ar: 'الأردن', en: 'Jordan', code: '+962', placeholder: '7xxxxxxxx' },
  { ar: 'مصر', en: 'Egypt', code: '+20', placeholder: '10xxxxxxxx' },
  { ar: 'العراق', en: 'Iraq', code: '+964', placeholder: '7xxxxxxxxx' },
  { ar: 'المغرب', en: 'Morocco', code: '+212', placeholder: '6xxxxxxxx' },
  { ar: 'الجزائر', en: 'Algeria', code: '+213', placeholder: '5xxxxxxxx' },
  { ar: 'تونس', en: 'Tunisia', code: '+216', placeholder: '9xxxxxxxx' },
  { ar: 'ليبيا', en: 'Libya', code: '+218', placeholder: '9xxxxxxxx' },
  { ar: 'السودان', en: 'Sudan', code: '+249', placeholder: '9xxxxxxxx' },
  { ar: 'سوريا', en: 'Syria', code: '+963', placeholder: '9xxxxxxxx' },
  { ar: 'اليمن', en: 'Yemen', code: '+967', placeholder: '7xxxxxxxx' },
  { ar: 'لبنان', en: 'Lebanon', code: '+961', placeholder: '3xxxxxx' },
  { ar: 'فلسطين', en: 'Palestine', code: '+970', placeholder: '5xxxxxxxx' },
  { ar: 'الولايات المتحدة', en: 'United States', code: '+1', placeholder: '2025550143' },
  { ar: 'المملكة المتحدة', en: 'United Kingdom', code: '+44', placeholder: '7911123456' },
  { ar: 'كندا', en: 'Canada', code: '+1', placeholder: '4165550198' },
  { ar: 'ألمانيا', en: 'Germany', code: '+49', placeholder: '15123456789' },
  { ar: 'فرنسا', en: 'France', code: '+33', placeholder: '612345678' },
  { ar: 'إيطاليا', en: 'Italy', code: '+39', placeholder: '3123456789' },
  { ar: 'إسبانيا', en: 'Spain', code: '+34', placeholder: '612345678' },
  { ar: 'تركيا', en: 'Turkey', code: '+90', placeholder: '5321234567' },
  { ar: 'كوريا الشمالية', en: 'North Korea', code: '+850', placeholder: '192123456' },
  { ar: 'كوريا الجنوبية', en: 'South Korea', code: '+82', placeholder: '1012345678' },
  { ar: 'اليابان', en: 'Japan', code: '+81', placeholder: '9012345678' },
  { ar: 'الصين', en: 'China', code: '+86', placeholder: '13812345678' },
  { ar: 'الهند', en: 'India', code: '+91', placeholder: '9876543210' },
  { ar: 'باكستان', en: 'Pakistan', code: '+92', placeholder: '3001234567' },
  { ar: 'أستراليا', en: 'Australia', code: '+61', placeholder: '412345678' },
  { ar: 'البرازيل', en: 'Brazil', code: '+55', placeholder: '11912345678' },
  { ar: 'أرجنتين', en: 'Argentina', code: '+54', placeholder: '91123456789' },
  { ar: 'روسيا', en: 'Russia', code: '+7', placeholder: '9123456789' },
  { ar: 'جنوب إفريقيا', en: 'South Africa', code: '+27', placeholder: '821234567' },
];

export default function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;
  const router = useRouter();
  const supabase = createClient();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [generalError, setGeneralError] = useState<React.ReactNode>('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedCountryObj = COUNTRIES.find(
    (c) => (locale === 'ar' ? c.ar : c.en) === formData.country
  );
  const phoneCode = selectedCountryObj ? selectedCountryObj.code : '';
  const phonePlaceholder = selectedCountryObj ? selectedCountryObj.placeholder : (locale === 'ar' ? 'اختر الدولة أولاً' : 'Select country first');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');
    
    const newErrors: { [key: string]: boolean } = {};

    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.country) newErrors.country = true;
    
    // تم تصحيح شرط التحقق ليقبل الأرقام المرنة وبطول لا يقل عن 9 أرقام
    if (!formData.phone || formData.phone.length < 9) newErrors.phone = true;
    
    if (!formData.password || formData.password.length < 6) newErrors.password = true;
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) newErrors.confirmPassword = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setGeneralError(
        locale === 'ar' 
          ? '⚠️ يرجى تصحيح الحقول المحددة وتأكد أن رقم الهاتف مكون من أرقام صحيحة.' 
          : '⚠️ Please correct highlighted fields and verify your phone number.'
      );
      return;
    }

    setLoading(true);
    const fullPhoneNumber = `${phoneCode}${formData.phone}`;

    try {
      // التسجيل المباشر عبر Supabase مع التحقق من تكرار البريد
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: fullPhoneNumber,
            country: formData.country,
          },
        },
      });

      if (error) {
        // فحص إذا كان الحساب موجوداً مسبقاً
        if (error.message.toLowerCase().includes('already registered') || error.status === 422) {
          setGeneralError(
            <div className="flex flex-col gap-2 items-center">
              <span>{locale === 'ar' ? '⚠️ هذا البريد الإلكتروني مسجل بالفعل.' : '⚠️ This email is already registered.'}</span>
              <Link 
                href={`/${locale}/signin`} 
                className="text-[#D9A62E] font-bold underline hover:text-white transition-colors"
              >
                {locale === 'ar' ? 'اضغط هنا لتسجيل الدخول' : 'Click here to Sign In'}
              </Link>
            </div>
          );
        } else {
          setGeneralError(error.message);
        }
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push(`/${locale}/verify-account?email=${encodeURIComponent(formData.email)}`);
      }, 1500);

    } catch (err: any) {
      setGeneralError(locale === 'ar' ? '⚠️ تعذر الاتصال بالخادم.' : '⚠️ Server connection failed.');
      setLoading(false);
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
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
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
              type="email" 
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
                    {locale === 'ar' ? c.ar : c.en} ({c.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
              </label>
              <div className={`flex items-center rounded-xl border bg-[#0B1628] overflow-hidden ${
                errors.phone ? 'border-red-500' : 'border-white/10 focus-within:border-[#D9A62E]'
              }`}>
                <span className="bg-[#142238] px-3 py-3 text-[#D9A62E] font-bold text-sm border-e border-white/10 min-w-[70px] text-center">
                  {phoneCode || '---'}
                </span>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={phonePlaceholder}
                  disabled={!formData.country}
                  className="w-full px-4 py-3 text-sm text-white bg-transparent placeholder:text-gray-500 focus:outline-none disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'كلمة المرور' : 'Password'}
              </label>
              <div className={`relative flex items-center rounded-xl border bg-[#0B1628] overflow-hidden ${
                errors.password ? 'border-red-500' : 'border-white/10 focus-within:border-[#D9A62E]'
              }`}>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-sm text-white bg-transparent placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3 text-gray-400 hover:text-[#D9A62E] transition-colors focus:outline-none cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                {locale === 'ar' ? 'إعادة كلمة المرور' : 'Confirm Password'}
              </label>
              <div className={`relative flex items-center rounded-xl border bg-[#0B1628] overflow-hidden ${
                errors.confirmPassword ? 'border-red-500' : 'border-white/10 focus-within:border-[#D9A62E]'
              }`}>
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-sm text-white bg-transparent placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="px-3 text-gray-400 hover:text-[#D9A62E] transition-colors focus:outline-none cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3.5 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold rounded-xl shadow-lg transition-all duration-300 text-center cursor-pointer disabled:opacity-50"
          >
            {loading 
              ? (locale === 'ar' ? 'جاري إنشاء الحساب...' : 'Creating Account...') 
              : (locale === 'ar' ? 'تسجيل' : 'Register')}
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