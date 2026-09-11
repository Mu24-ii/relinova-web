'use client';

import { useTranslations } from 'next-intl';
import { Wrench, ShieldCheck, Activity, Cpu, AlertTriangle, BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('Services');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const serviceKeys = [
    { key: 'consulting', slug: 'consulting', icon: <ShieldCheck className="w-8 h-8 text-[#D9A62E]" /> },
    { key: 'conditionMonitoring', slug: 'condition-monitoring', icon: <Activity className="w-8 h-8 text-[#D9A62E]" /> },
    { key: 'audit', slug: 'audit', icon: <Wrench className="w-8 h-8 text-[#D9A62E]" /> },
    { key: 'rcm', slug: 'rcm', icon: <Cpu className="w-8 h-8 text-[#D9A62E]" /> },
    { key: 'failureAnalysis', slug: 'failure-analysis', icon: <AlertTriangle className="w-8 h-8 text-[#D9A62E]" /> },
    { key: 'trainingDevelopment', slug: 'training-development', icon: <BookOpen className="w-8 h-8 text-[#D9A62E]" /> },
  ];

  // دالة مساعدة لجلب الترجمة أو استخدام نص افتراضي إن لم يجد المفتاح
  const safeTranslate = (key: string, fallback: string) => {
    try {
      const res = t(key);
      return res && !res.includes('MISSING_MESSAGE') ? res : fallback;
    } catch {
      return fallback;
    }
  };

  return (
    <div className="py-20 px-6 md:px-16 bg-[#0B1628] min-h-screen text-white" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ترويسة الصفحة */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[#142238] text-[#D9A62E] rounded-full text-xs font-bold border border-white/10 shadow-sm">
            {safeTranslate('tag', isAr ? 'خدماتنا الهندسية' : 'Engineering Services')}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            {safeTranslate('title', isAr ? 'حلول هندسية متكاملة' : 'Comprehensive Engineering Solutions')}
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-medium text-gray-300 leading-relaxed">
            {safeTranslate('pageSubtitle', isAr ? 'نقدم أفضل الخدمات الاستشارية وهندسة الموثوقية لرفع كفاءة الأصول.' : 'We provide top reliability and engineering consulting services.')}
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((item, index) => (
            <Link 
              key={index}
              href={`/services/${item.slug}`}
              className="bg-[#142238] p-8 rounded-3xl shadow-xl border border-white/10 hover:border-[#D9A62E]/50 transition-all duration-300 space-y-4 flex flex-col justify-between group block cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#0B1628] rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#D9A62E] group-hover:text-[#0B1628] transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#F2C75C] transition-colors">
                  {safeTranslate(`${item.key}.title`, item.key)}
                </h3>
                <p className="text-sm font-medium text-gray-300 leading-relaxed">
                  {safeTranslate(`${item.key}.desc`, isAr ? 'تفاصيل شاملة حول الخدمة الهندسية وتطبيقاتها المتقدمة.' : 'Comprehensive details about the engineering service.')}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center text-xs font-bold text-[#D9A62E]">
                <span>{safeTranslate('exploreMore', isAr ? 'استعراض الخدمة' : 'Explore More')}</span>
                {isAr ? (
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* قسم تواصل استشاري */}
        <div className="bg-[#142238] text-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className={`space-y-2 w-full md:w-auto ${isAr ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-bold text-[#D9A62E]">
              {safeTranslate('ctaTitle', isAr ? 'هل تحتاج إلى استشارة هندسية مخصصة؟' : 'Need Custom Engineering Consulting?')}
            </h2>
            <p className="text-sm text-gray-300 font-medium">
              {safeTranslate('ctaDesc', isAr ? 'تواصل معنا الآن لتحليل أصولك الصناعية ورفع مستوى موثوقيتها.' : 'Contact us now to analyze your industrial assets and improve reliability.')}
            </p>
          </div>
          <Link 
            href="/contact" 
            className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors text-sm whitespace-nowrap"
          >
            {safeTranslate('ctaButton', isAr ? 'تواصل مع خبير' : 'Contact Expert')}
          </Link>
        </div>

      </div>
    </div>
  );
}