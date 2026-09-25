'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navbar');

  // =====================================================================
  // تحكم كامل ومريح جداً في إظهار أو إخفاء أي رابط (true للإظهار، false للإخفاء)
  // =====================================================================
  const showLinks = {
    home: true,         // الرئيسية / Home
    about: true,        // من نحن / About
    courses: true,      // الدورات التدريبية
    consulting: true,   // الاستشارات الهندسية
    services: false,    // الخدمات / Services
    certificates: true, // الشهادات / Certificates (جديد)
    contact: true,      // تواصل معنا / Contact
  };

  // قائمة الروابط المترابطة مع الترجمة وحالة الإظهار
  const navLinks = [
    { key: 'home', href: '/', show: showLinks.home, label: t('links.home') },
    { key: 'about', href: '/about', show: showLinks.about, label: t('links.about') },
    { key: 'courses', href: '/courses', show: showLinks.courses, label: t('links.courses') },
    { key: 'consulting', href: '/consulting', show: showLinks.consulting, label: t('links.consulting') },
    { key: 'services', href: '/services', show: showLinks.services, label: t('links.services') },
    { key: 'certificates', href: '/certificates', show: showLinks.certificates, label: t('links.certificates') }, // رابط الشهادات
    { key: 'contact', href: '/contact', show: showLinks.contact, label: t('links.contact') },
  ];

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

        {/* الروابط الأساسية (تتولد وتتحدث تلقائياً حسب رغبتك) */}
        <div className="flex items-center gap-4 xl:gap-5 font-semibold text-[#B8C2D1] text-[11px] xl:text-[12px] flex-wrap justify-center">
          {navLinks
            .filter((link) => link.show)
            .map((link) => (
              <Link 
                key={link.key} 
                href={link.href} 
                replace 
                className="hover:text-[#D9A62E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
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