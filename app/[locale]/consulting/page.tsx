'use client';

import { useLocale } from 'next-intl';
import { Wrench, ShieldCheck, Target, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ConsultingPage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div className="py-20 px-6 md:px-16 bg-[#0B1628] min-h-screen text-white" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ترويسة القسم */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#142238] text-[#D9A62E] rounded-full text-xs font-bold border border-white/10 shadow-sm mx-auto">
            <Wrench size={14} className="text-[#D9A62E]" />
            <span>{isArabic ? 'الاستشارات الهندسية المتخصصة' : 'Specialized Engineering Consulting'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {isArabic ? 'حلول هندسية ترفع كفاءة أصولك التشغيلية' : 'Engineering Solutions to Boost Operational Efficiency'}
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-base font-medium text-gray-300 leading-relaxed">
            {isArabic 
              ? 'نقدم استشارات هندسية متقدمة في هندسة الموثوقية، مراقبة الحالة، وإدارة الأصول الصناعية لتقليل الأعطال التشغيلية وتعظيم العائد على الاستثمار وفق أحدث المعايير الدولية.'
              : 'We provide advanced engineering consulting in reliability engineering, condition monitoring, and industrial asset management to reduce operational failures and maximize ROI according to the latest international standards.'}
          </p>
        </div>

        {/* كروت الخدمات الاستشارية */}
        <div className={`grid md:grid-cols-3 gap-8 ${isArabic ? 'text-right' : 'text-left'}`}>
          
          <div className="bg-[#142238] p-8 rounded-2xl shadow-xl border border-white/10 space-y-4 hover:border-[#D9A62E]/50 transition-all group">
            <div className="w-12 h-12 bg-[#0B1628] text-[#D9A62E] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#D9A62E] group-hover:text-[#0B1628] transition-colors">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">
              {isArabic ? 'تدقيق الموثوقية (Reliability Audit)' : 'Reliability Audit'}
            </h2>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">
              {isArabic 
                ? 'تقييم شامل لأنظمة الصيانة الحالية واكتشاف فجوات الأداء لتطوير خطط عمل استراتيجية ترفع من جاهزية المعدات.'
                : 'Comprehensive assessment of current maintenance systems and performance gaps to develop strategic action plans that enhance equipment readiness.'}
            </p>
          </div>

          <div className="bg-[#142238] p-8 rounded-2xl shadow-xl border border-white/10 space-y-4 hover:border-[#D9A62E]/50 transition-all group">
            <div className="w-12 h-12 bg-[#0B1628] text-[#D9A62E] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#D9A62E] group-hover:text-[#0B1628] transition-colors">
              <Target size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">
              {isArabic ? 'تحليل السبب الجذري (RCA)' : 'Root Cause Analysis (RCA)'}
            </h2>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">
              {isArabic 
                ? 'تحقيقات هندسية دقيقة للأعطال المتكررة لضمان عدم تكرارها وتحسين استقرار العمليات المصنعية.'
                : 'Precise engineering investigations into recurring failures to prevent recurrence and improve manufacturing process stability.'}
            </p>
          </div>

          <div className="bg-[#142238] p-8 rounded-2xl shadow-xl border border-white/10 space-y-4 hover:border-[#D9A62E]/50 transition-all group">
            <div className="w-12 h-12 bg-[#0B1628] text-[#D9A62E] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#D9A62E] group-hover:text-[#0B1628] transition-colors">
              <Wrench size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">
              {isArabic ? 'استشارات إدارة الأصول' : 'Asset Management Consulting'}
            </h2>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">
              {isArabic 
                ? 'مواءمة عمليات الصيانة والتشغيل مع المعايير العالمية لزيادة العمر الافتراضي للمعدات وخفض التكاليف.'
                : 'Aligning maintenance and operations with global standards to extend equipment lifespan and reduce costs.'}
            </p>
          </div>

        </div>

        {/* أزرار التواصل المزدوجة */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          
          {/* زر الواتساب السريع */}
          <a 
            href="https://wa.me/966553898397?text=السلام%20عليكم،%20أود%20طلب%20استشارة%20هندسية%20لمؤسستي" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#142238] hover:bg-[#1c304f] text-white font-bold px-8 py-3.5 rounded-xl border border-white/10 shadow-md transition-colors text-sm"
          >
            <MessageSquare size={18} className="text-[#D9A62E]" />
            <span>{isArabic ? 'طلب استشارة عبر واتساب' : 'Request Consultation via WhatsApp'}</span>
          </a>

          {/* زر نموذج تواصل معنا */}
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors text-sm"
          >
            <span>{isArabic ? 'نموذج تواصل معنا' : 'Contact Us Form'}</span>
            <ArrowRight size={16} className={isArabic ? 'rotate-180' : ''} />
          </Link>

        </div>

      </div>
    </div>
  );
}