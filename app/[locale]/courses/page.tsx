'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Clock, Wrench, Activity, ShieldCheck, Cpu, ArrowRight, ArrowLeft, Sparkles, Bell } from 'lucide-react';

interface CourseItemProps {
  slug: string;
  categoryId: string;
  initialIsComingSoon: boolean; // التحكم في حالة الدورة (true = قريباً جداً / false = متاح للتسجيل)
  image: string;
  durationKey: string;
  levelKey: string;
  isArabic: boolean;
  safeTranslate: (key: string, fallback: string) => string;
}

// ==========================================
// مكون بطاقة الدورة (CourseCard)
// ==========================================
function CourseCard({ slug, categoryId, initialIsComingSoon, image, durationKey, levelKey, isArabic, safeTranslate }: CourseItemProps) {
  const [isComingSoon] = useState(initialIsComingSoon);
  const [isNotified, setIsNotified] = useState(false);

  const courseTitle = safeTranslate(`items.${slug}.title`, slug);

  // محتوى البطاقة الداخلي المشترك (الصورة، العنوان، الوصف، المدة والمستوى، والزر السفلي)
  const cardContent = (
    <div className="h-full flex flex-col justify-between">
      <div>
        {/* صورة الدورة */}
        <div className="w-full aspect-square bg-[#08101D] rounded-xl mb-4 relative overflow-hidden border border-[#D9A62E]/20 shadow-inner">
          <Image
            src={image}
            alt={courseTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* شارة "قريباً جداً" تظهر فقط إذا كانت الحالة true */}
          {isComingSoon && (
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1 bg-amber-500/90 text-[#0B1628] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-lg backdrop-blur-md border border-amber-400/35">
                <Sparkles className="w-3 h-3 animate-pulse" />
                {isArabic ? 'قريباً جداً' : 'Coming Soon'}
              </span>
            </div>
          )}
        </div>

        {/* عنوان الدورة */}
        <h3 className={`text-base font-bold mb-2 line-clamp-2 ${!isComingSoon ? 'text-white group-hover:text-[#F2C75C]' : 'text-white/90'}`}>
          {courseTitle}
        </h3>

        {/* وصف الدورة */}
        <p className="text-[#B8C2D1] text-xs mb-4 line-clamp-2 leading-relaxed">
          {safeTranslate(`items.${slug}.desc`, 'Course description goes here.')}
        </p>

        {/* مدة ومستوى الدورة */}
        <p className="text-[#D9A62E]/80 text-xs mb-4 font-semibold">
          {safeTranslate(durationKey, '3 Days')} • {safeTranslate(levelKey, 'Intermediate')}
        </p>
      </div>

      {/* منطقة أسفل البطاقة (أزرار التفاعل أو الانتقال) */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        {!isComingSoon ? (
          // شكل الزر في حالة الدورة المتاحة (رابط تفاصيل الدورة)
          <span className="inline-flex items-center gap-2 text-xs text-[#D9A62E] font-bold group-hover:text-[#F2C75C] transition-colors w-full justify-between">
            <span>{safeTranslate('viewDetails', isArabic ? 'عرض التفاصيل والتسجيل' : 'View Details & Enroll')}</span>
            {isArabic ? <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
          </span>
        ) : (
          // شكل الزر في حالة الدورة قيد التطوير (زر نبهني عند الإطلاق)
          <div className="flex items-center justify-between w-full gap-2" onClick={(e) => e.stopPropagation()}>
            <span className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {isArabic ? 'قيد التطوير' : 'In Development'}
            </span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsNotified(true);
              }}
              disabled={isNotified}
              className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                isNotified
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                  : 'bg-[#D9A62E]/20 hover:bg-[#D9A62E] text-[#D9A62E] hover:text-[#0B1628] border border-[#D9A62E]/30'
              }`}
            >
              <Bell className="w-3 h-3" />
              {isNotified ? (isArabic ? 'تم تفعيل التنبيه ✓' : 'Alert Set ✓') : (isArabic ? 'نبهني عند الإطلاق' : 'Notify When Live')}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {!isComingSoon ? (
        // إذا كانت الدورة متاحة، البطاقة بالكامل تصبح رابطاً قابلاً للضغط للانتقال لصفحة التفاصيل
        <Link 
          href={`/courses/${categoryId}/${slug}`}
          className="rounded-2xl p-5 flex flex-col justify-between shadow-xl transition-all duration-300 group block cursor-pointer bg-[#142238] border border-[#D9A62E]/30 hover:border-[#F2C75C] hover:shadow-[#D9A62E]/10 hover:-translate-y-1"
        >
          {cardContent}
        </Link>
      ) : (
        // إذا كانت الدورة قريباً جداً، تظهر كبطاقة عادية (غير قابلة للضغط كلياً للحماية) مع مظهر مميز
        <div className="rounded-2xl p-5 flex flex-col justify-between shadow-xl transition-all duration-300 group relative overflow-hidden bg-[#142238]/60 border border-white/10 border-dashed hover:border-[#D9A62E]/40 hover:-translate-y-1">
          {cardContent}
        </div>
      )}
    </>
  );
}

// ==========================================
// الصفحة الرئيسية لعرض الأقسام والدورات (CoursesPage)
// ==========================================
export default function CoursesPage() {
  const t = useTranslations('Courses');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // ⚙️ [منطقة التحكم بالدورات وتعديل حالتها بسهولة مستقبلاً]
  // لتغيير حالة أي كورس، قم بتعديل قيمة: initialIsComingSoon إلى (true) أو (false)
  const categories = [
    {
      id: 'maintenance',
      icon: <Wrench className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'preventive-maintenance', initialIsComingSoon: true, image: '/courses/preventive-maintenance.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'predictive-maintenance', initialIsComingSoon: true, image: '/courses/predictive-maintenance.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'cmms', initialIsComingSoon: true, image: '/courses/cmms.jpeg', durationKey: 'duration3Days', levelKey: 'levelIntermediate' },
        { slug: 'shutdown-management', initialIsComingSoon: true, image: '/courses/shutdown-management.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
        { slug: 'planning-and-scheduling', initialIsComingSoon: true, image: '/courses/planning-scheduling.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'sap-pm', initialIsComingSoon: true, image: '/courses/sap-pm.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
      ]
    },
    {
      id: 'vibration',
      icon: <Activity className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'vibration-analysis-cat-i', initialIsComingSoon: true, image: '/courses/vibration-analysis-1.jpeg', durationKey: 'duration4Days', levelKey: 'levelBeginner' },
        { slug: 'vibration-analysis-cat-ii', initialIsComingSoon: true, image: '/courses/vibration-analysis-2.jpeg', durationKey: 'duration5Days', levelKey: 'levelIntermediate' },
        { slug: 'vibration-analysis-cat-iii', initialIsComingSoon: true, image: '/courses/vibration-analysis-3.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
        { slug: 'ultrasound-testing-ndt-level-i', initialIsComingSoon: true, image: '/courses/ultrasound-level-1.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'mlt', initialIsComingSoon: true, image: '/courses/mlt.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'mle', initialIsComingSoon: true, image: '/courses/mle.jpeg', durationKey: 'duration3Days', levelKey: 'levelAdvanced' },
        { slug: 'lubrication-analysis-i', initialIsComingSoon: true, image: '/courses/mla-level-1.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'lubrication-analysis-ii', initialIsComingSoon: true, image: '/courses/mla-level-2.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'lubrication-analysis-iii', initialIsComingSoon: true, image: '/courses/mla-level-3.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
      ]
    },
    {
      id: 'reliability',
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'rcm', initialIsComingSoon: true, image: '/courses/rcm.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'rca', initialIsComingSoon: true, image: '/courses/rcm.jpeg', durationKey: 'duration3Days', levelKey: 'levelIntermediate' },
        { slug: 'fmea', initialIsComingSoon: true, image: '/courses/fmea.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
        { slug: 'cmrp-prep', initialIsComingSoon: true, image: '/courses/cmrp.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
        { slug: 'cmrt-prep', initialIsComingSoon: true, image: '/courses/cmrt.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'reliability-engineering', initialIsComingSoon: true, image: '/courses/reliability-engineering.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
      ]
    },
    {
      id: 'rotating-equipment',
      icon: <Cpu className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'pumps', initialIsComingSoon: true, image: '/courses/course-pumps.jpg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'compressors', initialIsComingSoon: true, image: '/courses/course-compressors.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
        { slug: 'fans', initialIsComingSoon: true, image: '/courses/course-fans.jpg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'bearings', initialIsComingSoon: true, image: '/courses/course-bearings.jpg', durationKey: 'duration3Days', levelKey: 'levelIntermediate' },
        { slug: 'mechanical-seals', initialIsComingSoon: true, image: '/courses/course-mechanical-seals.jpg', durationKey: 'duration3Days', levelKey: 'levelAdvanced' },
        { slug: 'turbines', initialIsComingSoon: true, image: '/courses/course-turbines.jpg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
      ]
    }
  ];

  const safeTranslate = (key: string, fallback: string) => {
    try {
      const res = t(key);
      return res && !res.includes('MISSING_MESSAGE') ? res : fallback;
    } catch {
      return fallback;
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1628] text-white py-12 px-6 md:px-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ترويسة الصفحة */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {safeTranslate('title', isArabic ? 'الدورات التدريبية' : 'Courses')}
          </h1>
          <p className="text-[#B8C2D1] mt-2 max-w-2xl text-sm md:text-base">
            {safeTranslate('subtitle', isArabic 
              ? 'استكشف كافة الدورات التدريبية المتاحة في أقسام الصيانة، الموثوقية، تحليل الاهتزازات، والمعدات الدوارة.' 
              : 'Explore all available training courses across maintenance, reliability, vibration analysis, and rotating equipment.'
            )}
          </p>
        </div>

        {/* عرض الأقسام والدورات */}
        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* عنوان القسم */}
              <div className="flex items-center gap-3 border-b border-[#D9A62E]/20 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#142238] flex items-center justify-center border border-[#D9A62E]/30 shadow-md">
                  {cat.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {safeTranslate(`categories.${cat.id}`, cat.id)}
                </h2>
                <span className="text-xs bg-[#142238] text-[#D9A62E] px-3 py-1 rounded-full border border-[#D9A62E]/30 font-semibold ms-auto shadow-sm">
                  {cat.courses.length} {isArabic ? 'دورات' : 'Courses'}
                </span>
              </div>

              {/* شبكة البطاقات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.courses.map((course, idx) => (
                  <CourseCard
                    key={idx}
                    slug={course.slug}
                    categoryId={cat.id}
                    initialIsComingSoon={course.initialIsComingSoon}
                    image={course.image}
                    durationKey={course.durationKey}
                    levelKey={course.levelKey}
                    isArabic={isArabic}
                    safeTranslate={safeTranslate}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}