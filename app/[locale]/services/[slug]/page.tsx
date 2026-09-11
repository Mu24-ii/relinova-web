'use client';

import { use } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, PhoneCall, Layers } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const validSlugs = [
  'consulting',
  'condition-monitoring',
  'audit',
  'rcm',
  'failure-analysis',
  'training-development'
];

export default function ServiceDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  
  const locale = useLocale();
  const isAr = locale === 'ar';

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const slugKeyMap: Record<string, string> = {
    'consulting': 'consulting',
    'condition-monitoring': 'conditionMonitoring',
    'audit': 'audit',
    'rcm': 'rcm',
    'failure-analysis': 'failureAnalysis',
    'training-development': 'trainingDev'
  };

  const tKey = slugKeyMap[slug];
  const t = useTranslations('Services');

  // ربط الصور المحلية التي قمت بتجهيزها
  const serviceImages = [
    '/images/services/vibration-analysis.jpg',
    '/images/services/reliability-strategy.jpg',
    '/images/services/failure-analysis.jpg'
  ];

  return (
    <div className="py-20 px-6 md:px-16 bg-primary min-h-screen text-white" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* زر العودة */}
        <div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold text-accent bg-primary-hover px-4 py-2 rounded-xl border border-white/10 hover:border-accent transition-colors"
          >
            {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            <span>{isAr ? 'العودة إلى الخدمات' : 'Back to Services'}</span>
          </Link>
        </div>

        {/* ترويسة الخدمة الأساسية */}
        <div className="space-y-4 text-center md:text-start border-b border-white/10 pb-8">
          <span className="inline-block px-4 py-1.5 bg-primary-hover text-accent rounded-full text-xs font-bold border border-white/10 shadow-sm">
            {t('tag')}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {t(`${tKey}.title`)}
          </h1>
          <p className="max-w-3xl text-base md:text-lg font-medium text-gray-300 leading-relaxed">
            {t(`${tKey}.desc`)}
          </p>
        </div>

        {/* الأقسام المتناوبة (صورة + نص بجانبها) */}
        <div className="space-y-16">
          
          {/* العنصر الأول */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-primary-hover p-6 md:p-10 rounded-3xl border border-white/10 shadow-xl">
            <div className="relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group">
              <Image 
                src={serviceImages[0]} 
                alt="Vibration Analysis" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-bold bg-primary px-3 py-1 rounded-lg border border-white/10">
                <Layers size={14} />
                <span>{isAr ? 'الركيزة الأولى' : 'Core Pillar 1'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {isAr ? 'تحليل الاهتزازات للآلات والمعدات الدوارة' : 'Vibration Analysis for Rotating Equipment'}
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                {isAr 
                  ? 'نعتمد أحدث تقنيات التشخيص المتقدمة لكشف الأعطال الكامنة في المحامل والمضخات والمحركات قبل حدوث توقف مفاجئ، مما يرفع من الاعتمادية التشغيلية.'
                  : 'We adopt advanced diagnostic technologies to detect hidden faults in bearings, pumps, and motors before unexpected downtime occurs.'}
              </p>
            </div>
          </div>

          {/* العنصر الثاني */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-primary-hover p-6 md:p-10 rounded-3xl border border-white/10 shadow-xl">
            <div className={`space-y-4 ${isAr ? 'md:order-1' : 'md:order-2'}`}>
              <div className="inline-flex items-center gap-2 text-accent text-xs font-bold bg-primary px-3 py-1 rounded-lg border border-white/10">
                <ShieldCheck size={14} />
                <span>{isAr ? 'الركيزة الثانية' : 'Core Pillar 2'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {isAr ? 'استراتيجيات الصيانة المتمحورة حول الموثوقية' : 'Reliability-Centered Maintenance Strategies'}
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                {isAr 
                  ? 'بناء خطط صيانة استباقية مخصصة لكل أصل صناعي لتقليل التكاليف التشغيلية وتعظيم الاستفادة من الأصول على المدى الطويل.'
                  : 'Building customized proactive maintenance plans for every industrial asset to minimize operating costs and maximize long-term asset utilization.'}
              </p>
            </div>
            <div className={`relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group ${isAr ? 'md:order-2' : 'md:order-1'}`}>
              <Image 
                src={serviceImages[1]} 
                alt="Reliability Strategy" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* العنصر الثالث */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-primary-hover p-6 md:p-10 rounded-3xl border border-white/10 shadow-xl">
            <div className="relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group">
              <Image 
                src={serviceImages[2]} 
                alt="Failure Analysis" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-bold bg-primary px-3 py-1 rounded-lg border border-white/10">
                <CheckCircle2 size={14} />
                <span>{isAr ? 'الركيزة الثالثة' : 'Core Pillar 3'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {isAr ? 'تقييم المخاطر وتحليل الأسباب الجذرية (RCA)' : 'Risk Assessment & Root Cause Analysis'}
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                {isAr 
                  ? 'التحقيق الاحترافي في الأعطال المتكررة لمعرفة الأسباب الجذرية ومنع تكرارها نهائياً باستخدام أحدث المنهجيات الهندسية المعتمدة.'
                  : 'Professional investigation of recurring failures to identify root causes and permanently prevent recurrence using approved engineering methodologies.'}
              </p>
            </div>
          </div>

        </div>

        {/* قسم تواصل سفلي فخم */}
        <div className="bg-primary-hover text-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-start">
            <h2 className="text-2xl font-bold text-accent">
              {isAr ? 'جاهز للارتقاء بموثوقية منشأتك؟' : 'Ready to upgrade your facility reliability?'}
            </h2>
            <p className="text-sm text-gray-300 font-medium">
              {isAr ? 'تواصل معنا اليوم ودع خبراءنا يقدمون لك الحلول الهندسية المناسبة.' : 'Contact us today and let our experts provide you with the right engineering solutions.'}
            </p>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors text-sm whitespace-nowrap"
          >
            <PhoneCall size={16} />
            <span>{isAr ? 'اطلب استشارة الآن' : 'Request Consultation'}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}