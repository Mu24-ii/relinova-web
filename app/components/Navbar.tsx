'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <nav className="w-full">
      {/* الشريط العلوي */}
      <div className="bg-[#070e1a] text-[#B8C2D1] text-[11px] py-2 px-6 md:px-12 flex justify-between items-center border-b border-white/5">
        <div className="flex flex-wrap gap-4 md:gap-6">
          <span className="flex items-center gap-2"><Phone size={13} className="text-[#D9A62E]" /> +966 55 389 8397</span>
          <span className="flex items-center gap-2"><Mail size={13} className="text-[#D9A62E]" /> Info@relinovaconsultant.com</span>
          <span className="flex items-center gap-2"><MapPin size={13} className="text-[#D9A62E]" /> الرياض، السعودية</span>
        </div>
      </div>

      {/* الشريط الرئيسي */}
      <div className="py-4 px-6 md:px-12 flex justify-between items-center bg-[#0B1628] shadow-lg border-b border-white/10">
        <div className="flex items-center">
          <Image 
            src="/relinovax-logo.png" 
            alt="ReliNova Logo" 
            width={160} 
            height={48} 
            style={{ width: 'auto', height: 'auto' }}
            className="object-contain max-h-[48px]"
            priority 
          />
        </div>

        {/* الروابط */}
        <div className="flex items-center gap-5 xl:gap-6 font-semibold text-[#B8C2D1] text-[11px] xl:text-[12px] flex-wrap justify-center">
          <Link href="/" replace className="hover:text-[#D9A62E] transition-colors">{t('links.home')}</Link>
          <Link href="/about" replace className="hover:text-[#D9A62E] transition-colors">{t('links.about')}</Link>
          <Link href="/courses" replace className="hover:text-[#D9A62E] transition-colors">{t('links.courses')}</Link>
          <Link href="/consulting" replace className="hover:text-[#D9A62E] transition-colors">{t('links.consulting')}</Link>
          <Link href="/services" replace className="hover:text-[#D9A62E] transition-colors">{t('links.services')}</Link>
          <Link href="/contact" replace className="hover:text-[#D9A62E] transition-colors">{t('links.contact')}</Link>
        </div>

        {/* أقصى اليمين: محول اللغات وأزرار التسجيل ودخول النظام */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* زر تسجيل (إنشاء حساب جديد) */}
          <Link 
            href="/register" 
            replace
            className="bg-[#D9A62E] hover:bg-[#F2C75C] transition-colors text-[#0B1628] font-bold px-4 py-2 rounded-md text-[13px] shadow-md"
          >
            تسجيل
          </Link>

          {/* زر تسجيل الدخول */}
          <Link 
            href="/signin" 
            replace
            className="border border-[#D9A62E]/50 hover:bg-[#D9A62E]/10 transition-colors text-[#F2C75C] px-4 py-2 rounded-md text-[13px] shadow-md font-semibold"
          >
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </nav>
  );
}