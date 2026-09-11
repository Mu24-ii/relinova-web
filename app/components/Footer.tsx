'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <footer className="bg-[#0B1628] text-white border-t border-white/10 pt-16 pb-12 px-6 md:px-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* 1. الشعار والوصف وأيقونات التواصل */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <Image 
              src="/relinovax-logo.png" 
              alt="ReliNova Logo" 
              width={140} 
              height={45} 
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain max-h-[45px]" 
            />
          </div>
          <p className="text-xs text-[#B8C2D1] leading-relaxed">
            {isArabic 
              ? 'ReliNova مخصصة لتمكين المهندسين والمنظمات من خلال تدريب عالمي المستوى وحلول موثوقية مبتكرة.'
              : 'ReliNova is dedicated to empowering engineers and organizations through world-class training and innovative reliability solutions.'}
          </p>
          
          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex items-center gap-3 pt-2">
            {/* لينكد إن */}
            <a 
              href="https://linkedin.com/in/YOUR_LINKEDIN" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-[#D9A62E] hover:bg-[#F2C75C] rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
            >
              <svg className="w-[22px] h-[22px] text-[#0B1628]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.35c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z"/>
              </svg>
            </a>

            {/* يوتيوب */}
            <a 
              href="https://youtube.com/@YOUR_YOUTUBE" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 bg-[#D9A62E] hover:bg-[#F2C75C] rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
            >
              <Image src="/youtube.png" alt="YouTube" width={22} height={22} className="w-5 h-5 object-contain filter brightness-0 opacity-90" />
            </a>

            {/* تيك توك */}
            <a 
              href="https://tiktok.com/@YOUR_TIKTOK" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 bg-[#D9A62E] hover:bg-[#F2C75C] rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
            >
              <Image src="/tiktok.png" alt="TikTok" width={22} height={22} className="w-5 h-5 object-contain filter brightness-0 opacity-90" />
            </a>

            {/* واتساب */}
            <a 
              href="https://wa.me/966553898397" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 bg-[#D9A62E] hover:bg-[#F2C75C] rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
            >
              <Image src="/whatsapp.png" alt="WhatsApp" width={22} height={22} className="w-5 h-5 object-contain filter brightness-0 opacity-90" />
            </a>
          </div>
        </div>

        {/* 2. روابط سريعة */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest text-white mb-5">
            {isArabic ? 'روابط سريعة' : 'QUICK LINKS'}
          </h4>
          <ul className="space-y-4 text-xs text-[#B8C2D1]">
            <li><Link href="/about" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'من نحن' : 'About Us'}</Link></li>
            <li><Link href="/courses" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'الدورات التدريبية' : 'Courses'}</Link></li>
            <li><Link href="/consulting" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'الاستشارات الهندسية' : 'Consulting'}</Link></li>
            <li><Link href="/services" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'الخدمات' : 'Services'}</Link></li>
            <li><Link href="/resources" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'الموارد' : 'Resources'}</Link></li>
            <li><Link href="/contact" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'اتصل بنا' : 'Contact Us'}</Link></li>
          </ul>
        </div>

        {/* 3. التدريب */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest text-white mb-5">
            {isArabic ? 'التدريب' : 'TRAINING'}
          </h4>
          <ul className="space-y-4 text-xs text-[#B8C2D1]">
            <li><Link href="/services/vibration-analysis" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'تحليل الاهتزازات' : 'Vibration Analysis'}</Link></li>
            <li><Link href="/services/thermography" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'التصوير الحراري للأشعة تحت الحمراء' : 'Infrared Thermography'}</Link></li>
            <li><Link href="/services/ultrasonic" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'التفتيش بالموجات فوق الصوتية' : 'Ultrasonic Inspection'}</Link></li>
            <li><Link href="/services/lubrication" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'الزيت وتحليل التشحيم' : 'Oil & Lubrication Analysis'}</Link></li>
            <li><Link href="/services/reliability-engineering" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'هندسة الموثوقية' : 'Reliability Engineering'}</Link></li>
            <li><Link href="/courses" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'جميع الدورات' : 'All Courses'}</Link></li>
          </ul>
        </div>

        {/* 4. الدعم */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest text-white mb-5">
            {isArabic ? 'الدعم' : 'SUPPORT'}
          </h4>
          <ul className="space-y-4 text-xs text-[#B8C2D1]">
            <li><Link href="/faq" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'الأسئلة الشائعة' : 'FAQ'}</Link></li>
            <li><Link href="/terms" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}</Link></li>
            <li><Link href="/privacy" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link></li>
            <li><Link href="/refund" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'سياسة الاسترجاع' : 'Refund Policy'}</Link></li>
            <li><Link href="/verify-certificate" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'التحقق من الشهادة' : 'Certificate Verification'}</Link></li>
            <li><Link href="/help" className="hover:text-[#D9A62E] transition-colors block leading-relaxed">{isArabic ? 'مركز المساعدة' : 'Help Center'}</Link></li>
          </ul>
        </div>

        {/* 5. النشرة البريدية */}
        <div className="space-y-4 lg:col-span-1">
          <h4 className="font-bold text-sm tracking-widest text-white mb-5">
            {isArabic ? 'البقاء على اتصال' : 'STAY CONNECTED'}
          </h4>
          <p className="text-xs text-[#B8C2D1]">
            {isArabic ? 'اشترك في نشرتنا البريدية' : 'Subscribe to our newsletter'}
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <input 
              type="email" 
              placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Your email address'} 
              className="w-full bg-[#142238] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#D9A62E] transition-colors"
            />
            <button 
              type="submit" 
              className="w-full bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold py-2.5 rounded-xl text-xs transition-colors shadow-md"
            >
              {isArabic ? 'اشتراك' : 'SUBSCRIBE'}
            </button>
          </form>
        </div>

      </div>

      {/* حقوق النشر */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-[#B8C2D1] gap-4 text-center md:text-left">
        <p>© {new Date().getFullYear()} ReliNova Institute & Consulting. {isArabic ? 'جميع الحقوق محفوظة.' : 'All Rights Reserved.'}</p>
        <p>{isArabic ? 'صُمم بشغف لتميز الموثوقية الهندسية' : 'Designed with ❤️ for Reliability Excellence'}</p>
      </div>
    </footer>
  );
}